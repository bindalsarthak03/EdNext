import React, { Component, useState,useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/faculty.scss';
import Data from './facData';
import Card from './facCards';
function Faculty() {
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }
    const { height, width } = useWindowDimensions();
    if(width>=1440) var itemNum=4;
    else if(width<1440 && width>870) var itemNum=3;
    else if(width<870 && width>560) var itemNum=2;
    if(width<560) var itemNum=1;


    return (
        <div className='facCont'>
            <h1>Our <span>Faculties</span></h1>
            <div className='container-fluid'>
                <OwlCarousel items={itemNum}
                    className="owl-theme"
                    loop
                    nav
                    margin={20}
                    >
                    
                    {Data.map((e)=>{
                        return (
                            <Card imgsrc={e.imgsrc} name={e.name} subject={e.subject} edu={e.edu} exp={e.exp} />
                        );
                    })}

                </OwlCarousel>
            </div>
        </div>
    );
}

export default Faculty;