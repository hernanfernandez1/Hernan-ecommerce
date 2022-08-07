import ItemCount from "./ItemCount";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const handleAdd = (quantityToAdd) => {
        setCount(quantityToAdd);
        navigate('/cart');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7" style={{ maxWidth: '100%', textAlign: 'center', height: '100%', padding: '15px' }}>
                    <img src={item.pictureUrl} style={{ maxWidth: '100%', width: '602px', height: '602px', border: 'solid 1px hsl(0deg 0% 0% / 8%)', borderRadius: '20px' }} />
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5" style={{ maxWidth: '100%', textAlign: 'center', padding: '15px' }}>
                    <h1 style={{ fontSize: '50px', marginBottom: '100px' }}>
                        {item.title}
                    </h1>
                    <div>
                        <p style={{ fontSize: '40px' }}>
                            {item.price}
                        </p>
                        <hr />
                        <h3 style={{ fontSize: '40px' }}>Detalle del Producto</h3>
                        <p style={{ fontSize: '25px' }}>
                            {item.description}
                        </p>
                    </div>
                    <ItemCount item={item} onAdd={handleAdd} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;