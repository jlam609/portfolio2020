import React from "react";
import Home from "./components/home";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Background, Parallax } from "react-parallax";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";

const App: React.FC = () => {
  return (
    <div>
      <Parallax
        strength={300}
        bgImage="https://img.freepik.com/free-photo/christmas-background-with-falling-snow-snowflake-holiday-winter-merry-christmas-happy-new-year_52701-32.jpg?size=626&ext=jpg"
        bgImageAlt="background1"
        className="home-picture"
      >
        <Navbar />
        <Home />
      </Parallax>
      <Parallax
        strength={300}
        bgImage="https://wallpaperset.com/w/full/a/a/2/39599.jpg"
        bgImageAlt="background2"
        className="home-picture"
      >
        <About />
      </Parallax>
      <Parallax
        strength={300}
        bgImage="https://lh3.googleusercontent.com/proxy/VxJcVGVcrKflS4gzf2zZxOrLQdBKrJ2pSUfjcaOpnQRCdj7crfesuukEbTAfcnM5nT4fFjCipBo3yodHG5JInIks_ZglKDV2dkSZS4eUc7fL5uN-kO8gyQ"
        bgImageAlt="background2"
        className="home-picture"
      >
        <Skills />
      </Parallax>
      <Parallax
        strength={300}
        bgImage="https://media.istockphoto.com/photos/beach-summer-background-picture-id1140992203?k=6&m=1140992203&s=612x612&w=0&h=LzOrsrxM8orw7K0fgJMMVhUQHUf2MYGlm3Wz-xAHbYQ="
        bgImageAlt="background2"
        className="home-picture"
      >
        <Portfolio />
      </Parallax>
      <Parallax
        strength={300}
        bgImage="https://static.vecteezy.com/system/resources/previews/000/153/503/non_2x/vector-grunge-air-mail-background.jpg"
        bgImageAlt="background2"
        className="home-picture"
      >
        <Contact />
      </Parallax>
    </div>
  );
};

export default App;
