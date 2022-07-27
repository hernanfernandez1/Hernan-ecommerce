import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    /*   const [stock, setStock] = useState(6);
  
      const onAdd = (counterStrike) => {
          setStock(Math.max(stock - counterStrike, 0));
      } */
    const [items, setItems] = useState([]);

    const url = './data/items.json';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                setTimeout(() => {
                    setItems(data);
                }, 2000);
            })
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", color: 'grey', textDecoration: 'underline' }}>
                {props.greeting}
            </h1>
            <ItemList items={items} />
            {/*  <ItemCount stock={stock} onAdd={onAdd} /> */}

        </div>
    );
}

export default ItemListContainer;
