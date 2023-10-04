import "./WorkedWithCI_Sec_LP.css";
import image1 from "./wi.png";
import image2 from "./wi1.png";
import image4 from "./wi3.png";
import image5 from "./wi4.png";
import image6 from "./wi5.png";
import image7 from "./wi6.png";
import image8 from "./wi7.png";
import image9 from "./wi8.png";
import image10 from "./wi9.png";
import image11 from "./wi10.png";
import image12 from "./wi12.png";
import image13 from "./wi13.png";

const imageNames = [

    image1,
    image2,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];
function WorkedWithCI_Sec_LP() {
  return (
    <div id="wwcis_wrapper" className="flex items-center justify-center gap-52 overflow-x-scroll">
      {imageNames.map((image, index) => (
        <img id="wwcls_imgs"  src={image} alt={`image${index + 1}`} key={`image${index + 1}`} />
      ))}
    </div>
  );
}

export default WorkedWithCI_Sec_LP;