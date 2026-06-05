import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-top">
                <div className="top">
                    <img className="img"
                        onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${props.company}&background=random`} src={props.logo} alt="" />
                    <button>Save <Bookmark size={20} /></button>
                </div>
                <div className="center">
                    <h3>{props.company}<span>{props.posted}</span></h3>
                    <h2>{props.role}</h2>
                    <div className="tags"><p>{props.type}</p>
                        <p>{props.level}</p></div>
                </div>
            </div>
            <div className="bottom">
                <div className='text'>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card