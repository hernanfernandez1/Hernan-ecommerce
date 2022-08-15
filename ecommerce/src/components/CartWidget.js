import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

function CartWidget() {

    const {cantInCart} = useContext(CartContext);

    if (cantInCart === 0) {
        return <></>;
    }
    return (
        <>
            <BsCartPlus style={{ fontSize: '20px', color: 'white' }} />
            {cantInCart}
        </>
    );

}

export default CartWidget;