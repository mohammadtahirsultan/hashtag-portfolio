/* eslint-disable no-unused-vars */
import "./RPSection.css";
import img1 from "./fintech.jpg";
import img2 from "./healthcare.jpg";
import img3 from "./On Demand Service.jpg";


function RPSection() {
  return (
    <>
    <h1 id="rp__sec__main__heading">Our Recent Projects</h1>
    <div id="rp__Section__wrapper">
      <div id="rp__sec__left__side">
        {/* cont-1 */}
        <div id="rp__sec__cont">
          <p id="rp__sec__bullet">
            Fintech
          </p>
          <h3 id="re__sec__heading">
            Accelerate the pace of digital innovation in financial services
          </h3>
          <ul id="rp__sec__list">
            <li id="rp__sec__litem"> E-payments & Digital Wallets</li>
            <li id="rp__sec__litem"> Government-to-payee Transfers</li>
            <li id="rp__sec__litem"> Micro Lending & Loan Management </li>
            <li id="rp__sec__litem"> Digital Banking & Big Data </li>
            <li id="rp__sec__litem"> Open Banking Softwares</li>
            <li id="rp__sec__litem"> Token-gated E-Commerce</li>
            <li id="rp__sec__litem"> Embedded Finance</li>
            <li id="rp__sec__litem"> Security & Compliance</li>
          </ul>
          <p id="rp__sec__endq">
            Explore our solutions for Fintech
          </p>
        </div>

        {/* content 2 */}
        <div id="rp__sec__cont">
          <p id="rp__sec__bullet">
            HEALTHCARE
          </p>
          <h3 id="re__sec__heading">
          Improving lives with smarter digital healthcare
          </h3>
          <ul id="rp__sec__list">
            <li id="rp__sec__litem"> Point of Care solutions</li>
            <li id="rp__sec__litem"> Health information exchange</li>
            <li id="rp__sec__litem"> Telehealth & telemedicine </li>
            <li id="rp__sec__litem"> Medical Imaging  </li>
            <li id="rp__sec__litem"> Wellness platforms</li>
          </ul>
          <p id="rp__sec__endq">
            Explore our solutions for Fintech
          </p>
        </div>

        {/* content - 3 */}
        <div id="rp__sec__cont">
          <p id="rp__sec__bullet">
            ON-DEMAND SERVICES
          </p>
          <h3 id="re__sec__heading">
          Build digital solutions for more liveable urban cities
          </h3>
          <ul id="rp__sec__list">
            <li id="rp__sec__litem"> On-demand deliver</li>
            <li id="rp__sec__litem"> Home & local services</li>
            <li id="rp__sec__litem">Health & beauty </li>
            <li id="rp__sec__litem"> Repairs & maintenance</li>
            <li id="rp__sec__litem"> Reservation & ticketing</li>
            <li id="rp__sec__litem"> Mobility & logistics</li>
          </ul>
          <p id="rp__sec__endq">
            Explore our solutions for Fintech
          </p>
        </div>
      </div>
      <div id = "rp__sec__right__side">
            <div id="rp__sec__img__cont">
                <img src= {img2} alt="Image 2" id="rp__sec__img " className="rounded-lg w-[150] mt-40 mb-40"/>
            </div>
        </div>
    </div>
    </>
  );
}

export default RPSection;
