import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="relative text-white p-5 font-bold">
            <div className="lh-2 w-full h-24 text-white w-full flex justify-center align-center rounded header">
                <nav className="w-10/12 m-auto">
                    <span className="mr-5 text-2xl py-3 rounded-full ring-2">AMA</span>
                    <h1 className="text-2xl md:text-4xl text-white inline-block">Make a Military Alliance</h1>
                </nav>
            </div>
        </div>
    );
};

export default Header;