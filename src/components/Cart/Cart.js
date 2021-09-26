import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let totalCountry = 0;
    let totalFund = 0;
    for (const country of cart){
        if (!country.quantity){
            country.quantity = 1;
        }

        totalCountry = totalCountry + country.quantity;
        totalFund = totalFund + JSON.parse(country.contribution);
    }


    return (
        <div className="mr-auto w-3/12 text-blue-400">
            <div className="p-5 fixed right-16 mt-3">
                <h1 className="text-2xl font-bold">Country Added : {totalCountry}<span className="text-white"></span></h1>
                <h1 className="text-xl font-bold">Total Fund : <span className="text-white">$ {totalFund}<span className="ml-2">Billion</span></span></h1>
            </div>
        </div>
    );
};

export default Cart;