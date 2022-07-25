import {useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    const [stock, setStock] = useState(6);

    const onAdd = (counterStrike) => {
        setStock(Math.max(stock - counterStrike, 0));
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", color: 'grey', textDecoration: 'underline' }}>
                {props.greeting}
            </h1>
            <ItemCount stock={stock} onAdd={onAdd} />

        </div>
    );
}

export default ItemListContainer;
