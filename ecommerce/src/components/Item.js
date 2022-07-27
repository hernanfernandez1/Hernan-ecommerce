import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsPlusSquareFill } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const Item = ({ item }) => {
    const [counterStrike, setCountStrike] = useState(1);

    const [stock, setStock] = useState(6);

    const onAdd = (counterStrike) => {
        setStock(Math.max(stock - counterStrike, 0));
    }

    useEffect(() => {

        stock <= 0 ? setCountStrike(0) : setCountStrike(1);
    }, [stock])

    function plusCount() {
        setCountStrike(Math.min(counterStrike + 1, stock));
    }

    function minusCount() {
        setCountStrike(Math.max(counterStrike - 1, 0));
    }

    return (
        <div>
            <Card style={{ width: '18rem', textAlign: 'center', marginTop: '30px' }}>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        {item.price}
                    </Card.Text>
                    <Button onClick={minusCount} variant="primary">
                        <FiMinus />
                    </Button>
                    {counterStrike}
                    <Button onClick={plusCount} variant="primary">
                        <BsPlusSquareFill />
                    </Button>
                </Card.Body>
                <div className="btn">
                    <Button variant="outline-primary" as="input" href="#" type="button" value="Ver detalle del producto" />
                </div>
                <div className='btn'>
                    <Button disabled={stock === 0 || counterStrike === 0} onClick={() => onAdd(counterStrike)} variant="primary">Añadir al carrito</Button>
                </div>
            </Card>

        </div>
    )
}

export default Item;