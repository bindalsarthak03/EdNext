import React from 'react'
import '../css/careers.scss'
import { TfiWorld } from 'react-icons/tfi'
import { SiNintendonetwork } from 'react-icons/si'
import { FaRegMoneyBillAlt, FaRegHourglass } from 'react-icons/fa'
function CareersCont() {
    
    return (
        <div className="careerCont" data-aos="zoom-in" data-aos-duration="1500">
            <h1>Career <span>Opportunities</span></h1>
            <h2 style={{ textAlign: 'center' }}>Perks of working with us!</h2>
            <div className="leftCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><TfiWorld /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Teach Anytime Anywhere</h2>
                    <p>You can pre-decide your teaching slots as per your own schedule</p>
                </div>
            </div>

            <div className="rightCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><FaRegMoneyBillAlt /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Earn Well</h2>
                    <p>Get paid on an hourly basis, earn for efforts you put in. Also earn the love and respect of students.</p>
                </div>
            </div>
            <div className="leftCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><FaRegHourglass /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Training</h2>
                    <p>Routine training sessions, feedback, feedback discussions on improving your teaching.</p>
                </div>
            </div>
            <div className="rightCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><SiNintendonetwork /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Network</h2>
                    <p>Be a part of thriving group of teach-preneurs and learn well.</p>
                </div>
            </div>
            <h1>To <span>Apply</span></h1>
            <div className="mail" >
                <div className="left">

                <p className='headingMail'>Send us a mail at <b>sarojshyam46@gmail.com</b> mentioning:</p>
                <p className='details'>•Your Name</p>
                <p className='details'>•Your Email Id</p>
                <p className='details'>•Your Contact Number</p>
                <p className='details'>•Your Education Qualification</p>
                <p className='details'>•Your Teaching Experience</p>
                <p className='details'>•A breif note on "Why should we hire you?"</p>
                </div>
                <div className="right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7785380036553!2d72.88961725183505!3d19.11736903298202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c98b45844547%3A0xdd99947566188320!2sEdnext!5e0!3m2!1sen!2sin!4v1671784339941!5m2!1sen!2sin" style={{filter: 'invert(100%)'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
            
        </div>
    );
}

export default CareersCont