import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Load from "./Load";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();

    const obtainProduct = async () => {
        const found = await getItem(id);
        setProduct(found)
    }

    useEffect(() => {

        obtainProduct();
    }, []);

    return (
        <>
            {product ? <ItemDetail item={product} /> : <Load />}
        </>
    );
}

export default ItemDetailContainer;