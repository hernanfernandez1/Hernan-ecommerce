import { useEffect, useState } from "react";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState();

    const obtainProduct = async () => {
        const found = await getItem();
        setProduct(found)
    }

    useEffect(() => {

        obtainProduct();
    }, []);

    return (
        <>
          {product && <ItemDetail item={product} />}
        </>
    );
}

export default ItemDetailContainer;