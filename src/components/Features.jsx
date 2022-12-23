import React from "react";
import '../css/feature.scss';
import { GiTeacher } from 'react-icons/gi';
import { BsFillPeopleFill,BsClockHistory } from 'react-icons/bs';
import {MdOndemandVideo} from 'react-icons/md';
import {FcFeedback} from 'react-icons/fc';
function Features() {
    return (
        <div className="featCont">
            <h1>Our <span>Salient Features</span></h1>
            <div className="leftCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><GiTeacher /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Personalised Learning</h2>
                    <p>We provide personlised assistance and teaching. MIT Research suggests, personal attention promises best results</p>
                </div>
            </div>
            <div className="rightCont" data-aos="zoom-out" data-aos-duration="1500">
                <div className="icon">
                    <p><BsFillPeopleFill /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Top Faculties</h2>
                    <p>We are backed with top <b>IITian</b> faculties. Faculties that have already cleared the exam that student aspires to. Proper guidance with personal attention.</p>
                </div>
            </div>
            <div className="leftCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><MdOndemandVideo/></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Online Classes</h2>
                    <p>Live Online classes with a maximum of 3 students in the group ensuring equal attention to each child.This ensures holistic development for the student.</p>
                </div>
            </div>
            <div className="rightCont" data-aos="zoom-out" data-aos-duration="1500">
                <div className="icon">
                    <p><BsClockHistory /></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>24X7 Doubts Solving</h2>
                    <p>Our teachers are available throughout the day. A single message will connect teacher and student.</p>
                </div>
            </div>
            <div className="leftCont" data-aos="zoom-in" data-aos-duration="1500">
                <div className="icon">
                    <p><FcFeedback/></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Feedback</h2>
                    <p>Proper feedback is taken by the students so that teachers can improve their teaching. Feedback is also given for the student so that he/she can work on weakness.</p>
                </div>
            </div>
        </div>
    );
}

export default Features