import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className=" bg-neutral text-neutral-content">
        <div className=" mx-auto flex flex-col sm:flex-row bg-neutral text-neutral-content">
          <div className="p-10 sm:w-1/2 bg-[#1F2937] flex flex-col items-center">
            <p className="footer-title">Contact Us</p>
            <address>
              <span>123 acb Street, Uni 11, Bangladesh</span>
            </address>
            <p>+01980327040</p>
            <p>Mon - Fri 8.00 - 22.00</p>
            <p>Sat - Sun 10.00 - 23.00</p>
          </div>
          <div className="p-10 sm:w-1/2 bg-[#111827] flex flex-col  items-center">
            <p className="footer-title">Follow US</p>
            <p>Join us on social media</p>
            <div className="flex flex-wrap gap-4">
              <a>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div className=" footer-center p-4 bg-[#151515] text-white ">
          <p>
            Copyright &copy; {new Date().getFullYear()} - All right reserved by
            <span className="uppercase"> Bistro Boss</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
