import { ReactComponent as PrevBtn } from "../assets/arrow-left.svg";
import { ReactComponent as NextBtn } from "../assets/arrow-right.svg";

import afterHours from "../assets/afterhours2.png";
import startboy from "../assets/Starboy.png";
import BBTM from "../assets/bbtm.jpg";

const albumPieces = [
  {
    id: 1,
    title: "After Hours",
    img: afterHours,
    spotifyLink:
      "https://open.spotify.com/album/6YlDIxqEjvY63ffH6AwCjd?si=BcOHsksPRbyfV1zgtrjAgg",
    year: 2020,
  },
  {
    id: 2,
    title: "Starboy",
    img: startboy,
    spotifyLink:
      "https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe?si=IpdCxLsiQgifKcTq0KiXng",
    year: 2016,
  },
  {
    id: 3,
    title: "Beauty Behind The Madness",
    img: BBTM,
    spotifyLink:
      "https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s?si=huDqyLerRsqGOUqf30n31A",
    year: 2015,
  },
];

const Albums = () => {
  return (
    <section className="albums">
      <div className="container-fluid">
        <div className="albums-navigation">
          <div className="albums-arrow prev disabled">
            <PrevBtn />
          </div>
          <div className="albums-arrow next ">
            <NextBtn />
          </div>
        </div>
        <div className="row">
          {albumPieces.map((album) => (
            <div className="album" key={album.id}>
              <div className="album-details">
                <h2>{album.year}</h2>
              </div>
              <div className="album-image">
                <img src={album.img} alt={album.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
