import React from "react";
import '../css/footer.scss'
import icon1 from '../Assets/Web/icons8-instagram-windows-11-color-32.png';
import icon2 from '../Assets/Web/icons8-facebook-windows-11-color-32.png';
import icon3 from '../Assets/Web/icons8-youtube-32.png'
function Footer(){
  return(
    <div className="footCont" id="footer">
      <div className="footHead">Get Demo For Free</div>
      <div className="subFootHead">Trusted by over 350+ students nationwide</div>
      <div className="footVals">
        <div className="figure">
          <div className="val">350+</div>
          <div className="obj">HAPPY STUDENTS</div>
        </div>
        <div className="figure">
          <div className="val">20,000+</div>
          <div className="obj">HOURS OF TEACHING</div>
          
      <button>
        <a href="https://forms.gle/e21unYGvbWs7YVgEA" target="_blank">Enroll Now</a>
      </button>
      <div className="socIcons">
        <a href="https://www.instagram.com/ednextindia/" target="_blank">
          <img src={icon1} alt="#"  />
        </a>
        <a href="https://www.facebook.com/ednextindia/" target="_blank">
          <img src={icon2} alt="" />
        </a>
        <a href="https://www.youtube.com/@ednextindia6000" target="_blank">
          <img src={icon3} alt="" />
        </a>
      </div>
      
      <div className="ack">Made with ❤️ by EdNext</div>
      
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