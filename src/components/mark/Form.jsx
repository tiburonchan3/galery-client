import React from "react";
import { MarkService } from "../../services/mark.service";
import { toast } from "react-toastify";

const Form = ({ setReload, setShowModal, oldMark }) => {
  const mark_services = new MarkService();
  const [mark, setMark] = React.useState({
    marca: "" || oldMark?.marca,
    id: null || oldMark?.id,
  });
  const onChange = (e) => {
    setMark({ ...mark, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (mark.marca !== "") {
      if (!oldMark) {
        mark_services.addMark(mark).then((res) => {
          setShowModal(false);
          setReload(true);
          toast.success(res.message);
        });
      } else {
        mark_services.putMark(mark).then((res) => {
          setShowModal(false);
          setReload(true);
          toast.success(res.messge);
        });
      }
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="grid grid-rows-2 gap-0">
          <input
            type="text"
            className="hidden"
            defaultValue={mark.id}
            onChange={onChange}
            name="id"
          />
          <label>Nombre</label>
          <input
            className="rounded border border-solid p-2 w-80"
            placeholder="nombre"
            defaultValue={mark.marca}
            name="marca"
            onChange={onChange}
          />
        </div>
        <button className="bg-blue-600 p-2 w-28 text-center text-semibold mt-8 text-white rounded-md font-semibold text-xs mr-8">
          {oldMark ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  );
};

export default Form;
