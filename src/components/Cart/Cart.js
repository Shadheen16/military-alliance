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
        <div className="w-4/12 text-blue-400">
            <div className="sticky top-0">
                <div className="p-5  mt-3">
                    <h1 className="text-2xl text-blue-40 font-bold">leader Added : <span className="text-white"></span>{totalleader}</h1>
                    <h1 className="text-xl font-bold">Total Fund : <span className="text-white">$ {totalFund}<span className="ml-2">bn</span></span></h1>
                </div>
                <div>
                </div>

                {
                    cart.map(leader => <Card
                        key={leader.leader}
                        leader={leader}
                        className="text-white"></Card>)
                }
            </div>
        </div>
    );
};

export default Cart;