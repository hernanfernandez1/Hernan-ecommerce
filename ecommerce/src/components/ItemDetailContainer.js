import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";
import ItemDetail from "./ItemDetail";
import Load from "./Load";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [load, setLoad] = useState(true);

    const obtainProduct = async () => {
        const found = await getItem(id);
        setProduct(found)
        setLoad(false)
    }

    useEffect(() => {

        obtainProduct();
    }, []);

    return (
        <>
            {load && <Load />}
            {product ? <ItemDetail item={product} /> : <h1 style={{ textAlign: "center", color: 'grey', textDecoration: 'underline' }}>No se encontró el producto</h1>}
        </>
    );
}

export default ItemDetailContainer;