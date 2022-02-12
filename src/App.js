import "./styles/App.scss";
import Header from "./components/header";
import { useEffect, useState } from "react";
import gsap from "gsap/all";

//importing pages =>
import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import About from "./pages/about";
import Approach from "./pages/approach";
import Services from "./pages/services";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation";

const routes = [
  { path: "/", name: "Home", Component: <Home /> },
  { path: "/about", name: "About", Component: <About /> },
  { path: "/case-studies", name: "CaseStudies", Component: <CaseStudies /> },
  { path: "approach", name: "Approach", Component: <Approach /> },
  { path: "/services", name: "Services", Component: <Services /> },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setInterval(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    //preventing flasing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    //set scss varable
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //fix location
    const debounceHandleRize = debounce(function handleRize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleRize);

    return () => {
      window.removeEventListener("resize", debounceHandleRize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <Navigation />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {Component}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
