import "./DevelopmentSection.css";
import DevImg from "./Dev Sec.png";

function DevelopmentSection() {
  return (
    <div id="dev_sec__container">
      <div id="dev_sec_info">
        {/* this is the left side of the component */}
        <div id="left__side__Dev__sec">
          <h1 id="dev__sec__subheading">Develop</h1>
          <h3 id="dev__sec__mainheading">Web Development</h3>
          <p id="dev__sec__description">
            Website Is An Asset For Your Business In Digital Era. Your Website
            Should Be A Machine That Generate Leads For Your Business And
            Convert Them Into Sales. It Should Work As A Sales Funnel. Your
            Website Should Be A Demon And Grab Every Possible Customer As You
            Can Possible Handle.
          </p>
          <button type="button" id="dev__sec__btn">
            Read More
          </button>
        </div>
      </div>
      {/* this is the right side of the component, which is an scrollable image */}
      <div id="dev__Sec__image">
        <img src={DevImg} alt="Imag lies here" />
      </div>
    </div>
  );
}

export default DevelopmentSection;
