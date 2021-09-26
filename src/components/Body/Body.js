import React, { useEffect, useState } from 'react';
import Leader from "../Leader/Leader"
import Cart from "../Cart/Cart"
const Body = () => {
    const [leaders, setleaders] = useState([]);
    const [cart, setCart] = useState([]);



    useEffect(() => {
        fetch('./db.JSON')
            .then(res => res.json())
            .then(data => setleaders(data));
    }, []);

    const handleAddToCart = (leader) => {
        const newCart = [...cart, leader];
        console.log(leader);
        setCart(newCart);
    }
    return (
        <div className="flex">
            <div className="ml-5 mr-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 w-8/12">
                {
                    leaders.map(leader => <Leader
                        handleAddToCart={handleAddToCart}
                        leader={leader}
                        key={leader.name}
                    ></Leader>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Body;