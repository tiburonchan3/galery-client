import { useEffect, useState } from "react";
import { destroyPhoto, getPhotos } from "../api/api";
import Layout from "../components/Layout";
import dots from "../img/dots.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

const Home = ({ reload, setreload }) => {
  const [photos, setPhotos] = useState();
  const getAll = () => {
    getPhotos().then((res) => {
      setPhotos(res.photos);
      console.log(res.photos[0]);
    });
    setreload(false);
  };
  useEffect(() => {
    return getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  const deletePhoto = (photo) => {
    const photourl = photo.photo.split("/");
    const url = photourl[7] + "/" + photourl[8];
    const public_id = url.split(".")[0];
    destroyPhoto(photo._id, public_id).then((res) => {
      if (res.ok) {
        setreload(true);
        toast.success(res.message);
        return;
      }
      toast.error("error al eliminar");
    });
  };
  return (
    <Layout>
      <div className="p-5 mt-10">
        <ResponsiveMasonry
          columsCountBreakPoints={{ 350: 1, 550: 2, 750: 3, 900: 4 }}
        >
          <Masonry>
            <>
              {photos &&
                photos.map((photo, index) => (
                  <div key={index} className="tile">
                    <LazyLoadImage
                      alt="no_image"
                      effect="blur"
                      src={photo.photo}
                    />
                    <div class="overlay">
                      <p onClick={() => deletePhoto(photo)}>
                        <FontAwesomeIcon icon={faTrashAlt} /> eliminar
                      </p>
                    </div>
                    <div className="tile-bottom">
                      <p>{photo.title}</p>
                      <img src={dots} alt="Extra Tile Menu" />
                    </div>
                  </div>
                ))}
            </>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Layout>
  );
};

export default Home;
