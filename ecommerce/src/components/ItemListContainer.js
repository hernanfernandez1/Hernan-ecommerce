import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Load from "./Load";
import { getCategory } from "../utils/api";

const ItemListContainer = (props) => {

    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {

        setItems(null);
        obtainProduct();
    }, [categoryId])

    const obtainProduct = async () => {

        const found = await getCategory(categoryId);
        setItems(found);
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", color: 'grey', textDecoration: 'underline' }}>
                {props.greeting}
            </h1>
            {items ? <ItemList items={items} /> : <Load />}

        </div>
    );
}

export default ItemListContainer;
