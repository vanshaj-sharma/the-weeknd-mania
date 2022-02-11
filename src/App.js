import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Albums from "./components/albums";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Albums />
    </div>
  );
}

export default App;
