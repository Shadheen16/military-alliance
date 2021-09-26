import React from 'react';
import "./Card.css"

const Card = (props) => {
    const leader = props.leader;
    return (
        <div className="text-blue-300 rounded px-1 py-2 m-2 mr-5 transparentCard flex">
            <img className="w-12 h-12 rounded-full mx-2 ring-2 ring-blue-400" src={leader.img} alt="" />
            <h1 className="text-sm text-left"><span className="text-white text-lg">{leader.name},</span> {leader.designation} of {leader.country} contributes {leader.contribution} bn</h1>
        </div>
    );
};

export default Card;