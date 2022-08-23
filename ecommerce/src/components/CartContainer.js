import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import OrderModal from "./OrderModal";

const CartContainer = () => {

    const valueToShare = useContext(CartContext);

    return (
        <div>
            <CartList valueToShare={valueToShare} />
            {valueToShare.cart.length > 0 ?
                <div className="container" style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly', marginTop: '50px', marginBottom: '50px' }}>
                    <OrderModal valueToShare={valueToShare} />
                </div>
                :
                <></>
            }
        </div>
    );
}

export default CartContainer;
