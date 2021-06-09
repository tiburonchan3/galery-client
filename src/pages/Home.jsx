import { useEffect, useState } from "react";
import { getPhotos } from "../api/api";
import Layout from "../components/Layout";
import dots from "../img/dots.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Home = ({ reload, setreload }) => {
  const [photos, setPhotos] = useState();
  const getAll = () => {
    getPhotos().then((res) => {
      setPhotos(res.photos);
    });
    setreload(false);
  };
  useEffect(() => {
    return getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  return (
    <Layout>
      <div className="content">
        <ResponsiveMasonry columsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry>
            {photos &&
              photos.map((photo) => (
                <div key={photo.id} className="tile">
                  <img src={photo.photo} alt="none_picture" />
                  <div className="overlay" />
                  <div className="tile-bottom">
                    <p>{photo.title}</p>
                    <img src={dots} alt="Extra Tile Menu" />
                  </div>
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Layout>
  );
};

export default Home;
