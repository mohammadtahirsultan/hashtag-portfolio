import "./Services.css";
import img1 from "./b-1.png";
import img2 from "./b-2.png";
import img3 from "./b3.png";
import GraphicIcon from "./Graphic Design.png";

import {useNavigate} from "react-router-dom"

function Services() {
  const navigate = useNavigate();
  return (
    <div id="service__section__container">
      <h1 id="services__section__subheading">WHAT WE DO</h1>
      <div id="services__section__header__container">
        <h3 id="services__section__mainheading">
          Expert In Every Aspect Of Lifecycle
        </h3>
        <button
          type="button"
          id="services__section__button"
          onClick={() => {
            navigate("/design-service");
          }}
        >
          Our Services
        </button>
      </div>
    <div id="services_section_banner_container">
      <div id="bg-imageContainer">
        <img src={img3} alt="Banner image 3" id="banner__img"/>
        <img src={img1} alt="Banner image 1" id="banner__img" style={{marginTop : "250px"}}/>
        <img src={img3} alt="Banner image 3" id="banner__img"/>
        <img src={img2} alt="Banner image 2" id="banner__img" style={{marginTop : "250px"}}/>
        <img src={img3} alt="Banner image 3" id="banner__img"/>
      </div>
      <div id="services__section__cover__photo">
      <div id="service__section__explanation">
        <div id="service__section__left">
        <div id="services__section__card__header">
        <h1 id="services__section__cover__heading">Design</h1>
        <img src={GraphicIcon} alt="" id="services__section__header__icon" />
        </div>
        <h3 id="services__section__cover__main__heading">Graphic Design</h3>
        <p id="services__section__cover__para">
          Our Creative Process Combines Innovative Design Concepts With Your
          Unique Message To Create Visually Stunning Banners That Captivate Your
          Audience. Whether For Online Advertising Or Physical Displays, Our
          Banners Are Strategically Crafted To Make A Powerful Impact And Leave
          A Lasting Impression. Let Us Help You Stand Out And Effectively
          Communicate Your Brand Identity Through Compelling Banner Designs That
          Drive Engagement And Success.
        </p>
        <button type="button" id="services__section__cover__button">
          Read More
        </button>
        </div>
        <div id="services__Section__icon">
          <img src={GraphicIcon} alt="Graphic Design Icon/Image" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Services;
