import { useEffect, useState } from "react";
import FavouritesFilter from "../../components/FavouritesFilter/FavouritesFilter";
import "./FavouritesPage.scss";

function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  return (
    <>
      <div className="favourites-page">
        <FavouritesFilter />
        <div className="favourites__logo-container">
          {favourites.length === 0 && (
            <video
              className="favourites__logo"
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="./src/assets/images/PD - Logo.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </div>
      </div>
    </>
  );
}

export default FavouritesPage;
