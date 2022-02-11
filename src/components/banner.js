import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>A website made by a Weekndist</span>
            </div>
            <div className="line">
              <span>XO for life.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              Merch Store <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
