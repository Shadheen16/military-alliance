import React ,{useState} from 'react';
import "../Card/Card"
import Card from '../Card/Card';

const Cart = (props) => {
    const cart = props.cart;
     const [cartChild, setCartChild] = useState([]);
    //  setCartChild((cartChild)=>{
    //      const newChartChild = [...cartChild, cart]});
    //  console.log(cartChild);

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
        <div className="w-3/12 text-blue-400 fixed right-0">
            <div className="p-5  mt-3">
                <h1 className="text-2xl text-blue-40 font-bold">Country Added : <span className="text-white"></span>{totalCountry}</h1>
                <h1 className="text-xl font-bold">Total Fund : <span className="text-white">$ {totalFund}<span className="ml-2">Bn</span></span></h1>
            </div>
            <div>
                {
                 cart.map(country=><Card
                    key={country.country}
                    country={country}
                    className="text-white"></Card>)
                }               
            </div>
        </div>
    );
};

export default Cart;