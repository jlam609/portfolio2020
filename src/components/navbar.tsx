import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Link, Element } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <Element name="Home">
      <nav>
        <Link
          className="link"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Home"
        >
          Home <HomeIcon />
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About <AccountCircleIcon />
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Work <WorkIcon />
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact <ContactMailIcon />
        </Link>
      </nav>
    </Element>
  );
};

export default Navbar;
