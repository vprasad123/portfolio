import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Smith</span> <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experiece in creating <br/>visually
          appeling and user-friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
