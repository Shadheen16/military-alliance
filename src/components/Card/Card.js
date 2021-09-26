import React from 'react';
import "./Card.css"

const Card = (props) => {
    const country = props.country;
    return (
        <div className="text-white rounded px-1 py-2 m-2 mr-5 transparentCard">
            <h1 className="text-xl">{country.country} contributes {country.contribution} bn</h1>
        </div>
    );
};

export default Card;