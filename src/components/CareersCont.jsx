import React from 'react'
import '../css/careers.scss'
import {TfiWorld} from 'react-icons/tfi'
import {SiNintendonetwork} from 'react-icons/si'
import {FaRegMoneyBillAlt, FaRegHourglass} from 'react-icons/fa'
function CareersCont() {
    return (
        <div className="careerCont">
            <h1>Career <span>Opportunities</span></h1>
            <h2 style={{ textAlign: 'center' }}>Perks of working with us!</h2>
            <div className="leftCont">
            <div className="icon">
                    <p><TfiWorld/></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Teach Anytime Anywhere</h2>
                    <p>You can pre-decide your teaching slots as per your own schedule</p>
                </div>
            </div>
            
            <div className="rightCont">
            <div className="icon">
                    <p><FaRegMoneyBillAlt/></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Earn Well</h2>
                    <p>Get paid on an hourly basis, earn for efforts you put in. Also earn the love and respect of students.</p>
                </div>
            </div>
            <div className="leftCont">
            <div className="icon">
                    <p><FaRegHourglass/></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Training</h2>
                    <p>Routine training sessions, feedback, feedback discussions on improving your teaching.</p>
                </div>
            </div>
            <div className="rightCont">
            <div className="icon">
                    <p><SiNintendonetwork/></p>
                </div>
                <div className="note">
                    <h2 style={{ fontWeight: 900 }}>Network</h2>
                    <p>Be a part of thriving group of teach-preneurs and learn well.</p>
                </div>
            </div>
            <div className="mail">
                <h1>Register <span>Here!</span></h1>
                <form action="mailto: " method="post" className='forms'>
                    <input type="text" placeholder='Name' style={{width:'70%',padding:'5px 10px',borderRadius:'40px 40px 40px 40px'}}/>
                    <input type="text" placeholder='E-mail' style={{width:'70%',padding:'5px 10px',borderRadius:'40px 40px 40px 40px'}}/>
                    <input type="text" placeholder='Contact' style={{width:'70%',padding:'5px 10px',borderRadius:'40px 40px 40px 40px'}}/>
                    <input type="text" placeholder='Educational Qualification' style={{width:'70%',padding:'5px 10px',borderRadius:'40px 40px 40px 40px'}}/>
                    <input type="text" placeholder='Years of teaching experience' style={{width:'70%',padding:'5px 10px',borderRadius:'40px 40px 40px 40px'}}/>
                    <input type="submit" value="Send" style={{width:'25%',border:'none',backgroundColor:'#6402a3',color:'white',padding:'8px 16px', borderRadius:'40px 40px 40px 40px'}}/>
                    <input type="reset" value="Reset" style={{width:'25%',border:'none',backgroundColor:'#6402a3',color:'white',padding:'8px 16px', borderRadius:'40px 40px 40px 40px'}}/>
                </form>
            </div>
        </div>
    );
}

export default CareersCont