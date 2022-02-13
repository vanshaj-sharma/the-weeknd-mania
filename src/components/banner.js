import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Made by a Weekndist</span>
            </div>
            <div className="line">
              <span>XO🤍 for life.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="https://shop.theweeknd.com/?utm_campaign=nav&utm_medium=referral&utm_source=theweeknd.com">
              To Merch Store <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
