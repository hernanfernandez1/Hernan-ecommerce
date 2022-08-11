import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

function CartWidget() {

    const valueToShare = useContext(CartContext);
    console.log("Contenido del carrito: \n", valueToShare.cart);
    return (
        <>
            <BsCartPlus style={{ fontSize: '20px', color: 'white' }} />
            {valueToShare.cantInCart}
        </>
    );

}

export default CartWidget;