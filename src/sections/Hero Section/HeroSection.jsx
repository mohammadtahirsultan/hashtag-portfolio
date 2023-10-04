import "./HeroSection.css";
// import {motion} from "framer-motion";

function HeroSection() {
  return (
    <div
      id="hero__section__container"
      className="flex items-center justify-evenly px-20 py-10" 
    >
      <div id="h__description">
        <div id="animated__text">
          <h1 id="h__sub__heading">Design & Service</h1>
        </div>
          <h1 id="h__section__heading">
            Transforming
            <br />
             Digital Ideas
             <br />
              Into Reality
          </h1>
          <p id="h__section__desc">
            At HashTag Web we specialize in designing, 
            building, shipping and scaling beautiful, usable 
            products with blazing-fast efficiency.
          </p>
      </div>
      <div className="parent-img">
      <div id="h__description__img">
        <img 
        src="./Web_Apps.png" 
        alt="Section image" 
        id="h__section__img"
        /> 
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
