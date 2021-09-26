import "../Card/Card"
import Card from '../Card/Card';

const Cart = (props) => {
    const cart = props.cart;

    let totalleader = 0;
    let totalFund = 0;
    for (const leader of cart) {
        if (!leader.quantity) {
            leader.quantity = 1;
        }

        totalleader = totalleader + leader.quantity;
        totalFund = totalFund + JSON.parse(leader.contribution);
    }


    return (
        <div className="w-4/12 text-white">
            <h1 className="mt-3 font-bold text-blue-400">ESTIMATED BUDGET 300 BILLION</h1>
            <div className="sticky top-2">
                <div className="mt-7">
                    {
                        cart.map(leader => <Card
                            key={leader.leader}
                            leader={leader}
                            className="text-white"></Card>)
                    }
                </div>
                <div className="p-5  mt-3">
                    <h1 className="text-2xl text-blue-40 font-bold">LEADER ADDED : <span className="text-white"></span>{totalleader}</h1>
                    <h1 className=" font-bold text-white">TOTAL FUND : <span className="text-white">$ {totalFund}<span className="ml-2">BILLION</span></span></h1>
                </div>
            </div>

        </div>
    );
};

export default Cart;