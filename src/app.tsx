import React from "react";
import Home from "./components/home";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Background, Parallax } from "react-parallax";
import Navbar from "./components/navbar";
import About from "./components/about";

const App: React.FC = () => {
  return (
    <div>
      <Parallax
        strength={300}
        bgImage="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-1300x500.jpeg"
        bgImageAlt="background1"
        className="home-picture"
      >
        <Navbar />
        <Home />
      </Parallax>
      <Parallax
        strength={300}
        bgImage="https://img.freepik.com/free-photo/room-with-concrete-floor-smoke-background_9083-2991.jpg?size=626&ext=jpg"
        bgImageAlt="background2"
        className="home-picture"
      >
        <About />
      </Parallax>
    </div>
  );
};

export default App;
