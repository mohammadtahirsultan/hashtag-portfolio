import "./EcomClientSatSec.css";
import kayla from "./kayla.jpg";

function EcomClientSatSec() {
  return (
    <div id="ecom_css_wrapper" className="flex flex-col gap-5 items-center justify-center min-w-80 mt-10 mb-10">
        <h1 className="font-black text-4xl text-[#0074FF]">What Our Clients Say</h1>
        <p className="text-[#888888] w-1/2 text-xl font-medium" id="ecom_css_quote">“Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week.”</p>
        <div className="flex justify-center items-center gap-5">
            <img src={kayla} alt="kayla our client"  className="w-14 rounded-full h-auto shadow-lg"/>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[#2c2c2c] font-semibold">Harry Puttar</p>
                <p className="text-[#888888]">@Hogwarts@DumbHarry</p>
            </div>
        </div>
    </div>
  )
}

export default EcomClientSatSec