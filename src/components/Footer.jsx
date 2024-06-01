import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer(){
    return (
        <>
        <footer>
            <div className="main">
            <div className="logodiv">
                <img src="https://cdn-icons-png.flaticon.com/128/2276/2276931.png" alt="logo" className="logo" />
                <h1 style={{color:"black"}}>Logoipsum</h1>
            </div>
            <div className="footerpara">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae asperiores unde eum at placeat quasi quam? Amet est sequi iure quas accusamus repellendus esse? Odit deleniti similique suscipit architecto tempora!</p>
            </div>
            <div className="footernav">  
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Quote</a></li>
                    <li><a href="">Resturants</a></li>
                    <li><a href="">Foods</a></li>
                    <li><a href="">Contants</a></li>
                </ul>
            </div>
            <div className="social">
                 <FaFacebook/>
                 <FaInstagram/>
                 <FaLinkedinIn/>
                 <FaTwitter/>
                 <FaWhatsapp/>
            </div>
            </div>
        </footer>
        </>
    )
}
export default Footer