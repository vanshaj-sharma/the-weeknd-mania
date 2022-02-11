import Banner from "../components/banner";
import Albums from "../components/albums";
import IntroOverlay from "../components/introOverlay";

const Home = () => {
  return (
    <>
      <IntroOverlay />
      <Banner />
      <Albums />
    </>
  );
};

export default Home;
