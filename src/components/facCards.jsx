import React from "react";
import '../css/faculty.scss'
function Card (props){
    return (
        <div className='faculty'>
            <img className="img" src={props.imgsrc} />
            <p className="name">{props.name}</p>
            <p className="sub">{props.subject}</p>
            <p className="edu">{props.edu}</p>
            <p className="exp">{props.exp}</p>
        </div>
    )
}

export default Card