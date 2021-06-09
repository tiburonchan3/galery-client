import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { addPhoto } from "../api/api";
import UploadIcon from "../img/uploadFile.svg";
import Layout from "../components/Layout";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Add = ({ setreload }) => {
  const [title, setTitle] = useState();
  const [image_file, setImage_file] = useState(null);
  const [image, setImage] = useState(null);
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDropImage = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setImage(URL.createObjectURL(file));
    setImage_file(file);
  });
  const {
    getRootProps: getRootImgProps,
    getInputProps: getInputImgProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop: onDropImage,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title !== undefined && image_file !== null) {
      addPhoto(title, image_file).then((res) => {
        if (res.ok) {
          setreload(true);
          history.push("/");
        }
      });
    } else {
      toast.warning("no dejes campos vacios");
    }
  };
  return (
    <Layout>
      <div className="container w-screen h-screen flex justify-items-center justify-center content-center items-center">
        <div className="rounded shadow w-auto h-auto p-10 flex flex-col md:flex-row">
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <label>Titulo de la foto</label>
                <input
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  className="w-full mt-2 p-1 flex items-center bg-white rounded-lg tracking-wide  border cursor-pointer"
                  placeholder="Escribe el titulo de la foto"
                />
              </div>
              <div className="mt-4">
                <label>foto</label>
                <label className="w-full mt-2 p-1 flex items-center bg-white rounded-lg tracking-wide  border cursor-pointer">
                  <img
                    src={UploadIcon}
                    alt="none"
                    className="w-6 text-blue ml-2"
                  />
                  <span className="text-sm leading-normal ml-4 ">
                    Seleccionar una imagen
                  </span>
                  <input
                    {...getInputImgProps()}
                    type="file"
                    className="rounded border w-full"
                  />
                </label>
              </div>
              <button className="mt-8 bg-blue-500 px-8 text-white rounded">
                Guardar
              </button>
            </form>
          </div>
          <div
            {...getRootImgProps()}
            className="p-10 flex justify-items-center content-center items-center justify-center"
          >
            <img
              src={image}
              alt="none"
              className="h-28 lg:h-60 md:h-44 sm:h-32 mt-8"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
