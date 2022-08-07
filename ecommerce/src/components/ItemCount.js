import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsPlusSquareFill } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const ItemCount = ({ onAdd }) => {

    const [counterStrike, setCountStrike] = useState(1);
    const stock = 6;

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
            <Button onClick={minusCount} variant="primary">
                <FiMinus />
            </Button>
            {counterStrike}
            <Button onClick={plusCount} variant="primary">
                <BsPlusSquareFill />
            </Button>
            <div className='btn'>
                <Button disabled={stock === 0 || counterStrike === 0} onClick={() => onAdd(counterStrike)} variant="primary">Añadir al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount