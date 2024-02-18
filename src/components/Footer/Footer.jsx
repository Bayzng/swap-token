import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="headerFoot">
      <section className="mailing">
      <h1>
        Start making the world safer, <br /> Join the Movement.
      </h1>

      <button>Join Waitlist&nbsp;😉</button>
      </section>

      <div className="footer_box">
        <div className="footer_box_social">
          <button className="footer_button">
            <a href="#">
              <CiFacebook color="blue" />
            </a>
          </button>
          <button className="footer_button">
            <a href="#">
              <BsTwitterX color="black" />
            </a>
          </button>
          <button className="footer_button">
            <a href="#">
              <FaInstagram color="red" />
            </a>
          </button>

        </div>

        <div className="footer_box_text">
        <div className="footer_box_Privacy">
            <h3>Privacy</h3>
          </div>
          <div className="footer_box_Terms">
            <h3>Terms</h3>
          </div>
          <div className="footer_box_EmailUs">
            <h3>Email Us</h3>
          </div>
      </div>
        </div>
    </div>
  );
};

export default Footer;


