import React from "react";
import '../css/footer.scss'

function Footer(){
  return(
    <div className="footCont">
      <div className="footHead">Get Demo For Free</div>
      <div className="subFootHead">Trusted by over 200+ students nationwide</div>
      <div className="footVals">
        <div className="figure">
          <div className="val">200+</div>
          <div className="obj">HAPPY STUDENTS</div>
        </div>
        <div className="figure">
          <div className="val">10,000+</div>
          <div className="obj">HOURS OF TEACHING</div>
          
      <button>
        <a href="">Enroll Now</a>
      </button>
      <div className="ack">Made with 💖 by EdNext.</div>
        </div>
        <div className="figure">
          <div className="val">20+</div>
          <div className="obj">DEDICATED FACULTIES</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;