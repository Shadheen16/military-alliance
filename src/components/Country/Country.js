import React, { useState } from 'react';
import "./Country.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Country = (props) => {
    // destructuring props data
    const { name, designation, country, img, power_rank, contribution } = props.country;

    // icons
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;

    // disable button after first click
    const [disable, setDisable] = useState(false);

    return (
        <div className="p-5 bg-black rounded text-white ring-2 ring-blue-400 ring-opacity-90">
            <div >
                <img className="w-32 h-32 rounded-full m-auto ring-2 ring-blue-400 ring-offset-1 image" src={img} alt="" />
                <br />
                <h1>Name: {name}</h1>
                <p><small className="text-blue-400">{designation}
                </small></p>
                <p>Country: {country}</p>
                <p>Military Power Ranking: {power_rank}</p>
                <p className="">Possible Contribution: {contribution} Billion</p>
                <button
                    disabled={disable}
                    onClick={() => {
                        props.handleAddToCart(props.country)
                        setDisable(true);
                    }}
                    className="px-8 py-1 bg-blue-400 ring-2 ring-blue-400 hover:bg-black rounded mt-5"><span className="mr-2">{cartIcon}</span>Add to Cart</button>
                <div className="mt-5 flex justify-around">
                    <img className="bg-white hover:bg-blue-400 w-10" src="https://img.icons8.com/material-sharp/24/000000/twitter.png" alt="" />
                    <img className="bg-white hover:bg-blue-400 w-10" src="https://img.icons8.com/ios-filled/50/000000/facebook--v2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Country;