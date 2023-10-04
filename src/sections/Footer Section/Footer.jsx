import "./Footer.css"
import Logo from "../../components/Header Components/Logo";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div id="footer__container" className="flex flex-col items-center justify-around bg-black text-gray-300">
        <div id="top" className="flex items-center justify-evenly px-7">
        <div id = "companyinfo" className="py-10">
            <Logo/>
            <p id="brand explanation" className="pt-5 text-sm text-gray">
            At Hashtag Web, we provide dedicated Graphic Design, Development & 
            Marketing packages and we believe that the best are made with a personal touch. 
            We take your ideas and make them come to life.
            </p>
        </div>

        <div id = "trustedby" className="flex flex-col">
            <h1 id="item__heading">
            Trusted By
            </h1>
            <a href="#" id="f__link">Startups</a>
            <a href="#" id="f__link">Enterprises</a>
            <a href="#" id="f__link">Organizations</a>

        </div>
        <div id = "Services">
        <h1 id="item__heading">
        Services
            </h1>
            <a href="#" id="f__link">Custom Software</a>
            <a href="#" id="f__link">Design Studio</a>
            <a href="#" id="f__link">Digital Services</a>

        </div>
        <div id = "company">
        <h1 id="item__heading">
        Company
            </h1>
            <a href="#" id="f__link">About us</a>
            <a href="#" id="f__link">Contact us</a>
            <a href="#" id="f__link">Blogs</a>
        </div>
        </div>

        <div className="flex py-5" id="copyrights">
            <p id="stmnt">Copyright © 2023 Hashtag Web | All rights reserved </p>
            <div id="s-icons">
                <InstagramIcon sx={{color : "white", marginRight : 2}}/>
                <TwitterIcon sx={{color:"white"}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer