import "./styles/App.scss";
import Header from "./components/header";
import { useEffect } from "react";
import gsap from "gsap/all";

//importing pages =>
import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import About from "./pages/about";
import Approach from "./pages/approach";
import Services from "./pages/services";
import { Route } from "react-router-dom";

const routes = [
  { path: "/", name: "Home", Component: <Home /> },
  { path: "/about", name: "About", Component: <About /> },
  { path: "/case-studies", name: "CaseStudies", Component: <CaseStudies /> },
  { path: "approach", name: "Approach", Component: <Approach /> },
  { path: "/services", name: "Services", Component: <Services /> },
];

function App() {
  useEffect(() => {
    //preventing flasing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    //set scss varable
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <>
      <Header />
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
