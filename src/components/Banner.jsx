import React from 'react'
import '../css/banner.css'
const Banner = () => {
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";

        document.body.appendChild(css);
      };

    return (
        <div className="banner"  data-aos="zoom-in" data-aos-duration="1000">
            <p className='heading'>Your own personalised education portal</p>
            <p className='description'>A platform where you can learn <br /> directly from top faculties</p>
            <p className='description2'>Start your <br/>
                <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='[ "JEE", "NEET", "CET", "BOARDS" ]'></span> 
                    <br/>preparation now!</p>
            <iframe className='video' width="1571" height="656" src="https://www.youtube.com/embed/j0c832maFOU" title="Ednext Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button className='btn'>
                <a href="#facs">Our Faculties</a>
            </button>
        </div>
    )
}

export default Banner