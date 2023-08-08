import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Footer component that displays contact information, social media links, and copyright notice.
const Footer = () => {
  return (
    <>
      <footer className="bg-neutral text-neutral-content">
        <div className="mx-auto flex flex-col sm:flex-row bg-neutral text-neutral-content">
          {/* Left column with contact information */}
          <div className="p-10 sm:w-1/2 bg-[#1F2937] flex flex-col items-center">
            <p className="footer-title">Contact Us</p>
            <address>
              <span>123 acb Street, Uni 11, Bangladesh</span>
            </address>
            <p>+01980327040</p>
            <p>Mon - Fri 8.00 - 22.00</p>
            <p>Sat - Sun 10.00 - 23.00</p>
          </div>

          {/* Right column with social media links */}
          <div className="p-10 sm:w-1/2 bg-[#111827] flex flex-col items-center">
            <p className="footer-title">Follow US</p>
            <p>Join us on social media</p>
            <div className="flex flex-wrap gap-4">
              {/* Social media icons */}
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

        {/* Footer bottom section with copyright notice */}
        <div className="footer-center p-4 bg-[#151515] text-white ">
          <p>
            Copyright &copy; {new Date().getFullYear()} - All rights reserved by
            <span className="uppercase"> Bistro Boss</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
