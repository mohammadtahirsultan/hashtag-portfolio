/* eslint-disable react/no-unescaped-entities */
import "./EcomMgmntSec.css";
import mgmntOne from "./stmnt-1.png";
import mgmntTwo from "./stmnt-2.png";
import mgmntThree from "./stmnt-3.png";
import mgmntFour from "./stmnt-4.png";


function EcomMgmntSec() {
  return (
    <div className="flex flex-col ml-10 mr-10 mt-10 mb-10">
      <div className="flex items-center justify-center bg-[#FAFAFB] p-10 pl-10 pr-100" id="ecom_mgmnt_secs">
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">E-Commerce Management</h1>
          <p id="ecom_mgmnts_maintext">
            Welcome to our comprehensive guide on E-Commerce Management! In
            today's fast-paced digital landscape, managing an online store
            efficiently and effectively is paramount to success. Whether you're
            a seasoned e-commerce veteran or just starting out, this section
            will provide you with valuable insights into the world of e-commerce
            management.
          </p>
        </div>
        <img src={mgmntOne} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
      </div>
      

      <div className="flex items-center justify-center gap-10 p-10" id="ecom_mgmnt_secs">
        <img src={mgmntFour} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">E-Commerce Management</h1>
          <p id="ecom_mgmnts_maintext">
            Welcome to our comprehensive guide on E-Commerce Management! In
            today's fast-paced digital landscape, managing an online store
            efficiently and effectively is paramount to success. Whether you're
            a seasoned e-commerce veteran or just starting out, this section
            will provide you with valuable insights into the world of e-commerce
            management.
          </p>
        </div>
      </div>


      <div className="flex items-center justify-center gap-10 bg-[#FAFAFB] w-[100%] p-10" id="ecom_mgmnt_secs">
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">E-Commerce Management</h1>
          <p id="ecom_mgmnts_maintext">
            Welcome to our comprehensive guide on E-Commerce Management! In
            today's fast-paced digital landscape, managing an online store
            efficiently and effectively is paramount to success. Whether you're
            a seasoned e-commerce veteran or just starting out, this section
            will provide you with valuable insights into the world of e-commerce
            management.
          </p>
        </div>
        <img src={mgmntThree} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
      </div>

      <div className="flex items-center justify-center gap-10" id="ecom_mgmnt_secs">
      < img src={mgmntTwo} alt="Management-Image" id="ecom_hero_mgmnt_img"/>
        <div id="ecom_mgmnts_desc">
          <h1 id="ecom_mgmnts_mainheading">E-Commerce Management</h1>
          <p id="ecom_mgmnts_maintext">
            Welcome to our comprehensive guide on E-Commerce Management! In
            today's fast-paced digital landscape, managing an online store
            efficiently and effectively is paramount to success. Whether you're
            a seasoned e-commerce veteran or just starting out, this section
            will provide you with valuable insights into the world of e-commerce
            management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EcomMgmntSec;
