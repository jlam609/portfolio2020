import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import StarIcon from '@material-ui/icons/Star';
import { Link, Element } from "react-scroll";
import { AppBar, Tooltip } from "@material-ui/core";

const Navbar: React.FC = () => {
  return (
    <Element name="Home">
      <AppBar>
      <div className='Navbar'>
        <Tooltip title='Home'>
        <Link
          className="link"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Home"
        >
          <HomeIcon />
        </Link>
        </Tooltip>
        <Tooltip title='About'>
        <Link
          className="link"
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <AccountCircleIcon />
        </Link>
        </Tooltip>
        <Tooltip title='Skills'>
        <Link
          className="link"
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <StarIcon />
        </Link>
        </Tooltip>
        <Tooltip title='Projects'>
        <Link
          className="link"
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <WorkIcon />
        </Link>
        </Tooltip>
        <Tooltip title='Contact'>
        <Link
          className="link"
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ContactMailIcon />
        </Link>
        </Tooltip>
        </div>
      </AppBar>
    </Element>
  );
};

export default Navbar;
