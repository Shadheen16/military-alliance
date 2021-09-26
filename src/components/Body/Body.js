import React, { useEffect, useState } from 'react';
import Country from "../Country/Country"
import Cart from "../Cart/Cart"
const Body = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./db.JSON')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleAddToCart = (country) => {
        const newCart = [...cart, country];
        console.log(country);
        setCart(newCart);
    }
    return (
        <div className="flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 w-9/12">
                {
                    countries.map(country => <Country
                        handleAddToCart={handleAddToCart}
                        country={country}
                        key={country.name}
                    ></Country>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Body;