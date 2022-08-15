import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const Item = ({ item }) => {
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
                       {'$'}{item.price}
                    </Card.Text>
                </Card.Body>
                <div className="btn">
                    <LinkContainer to={'/item/' + item.id}>
                        <Button variant="outline-primary" as="input" type="button" value="Ver detalle del producto" />
                    </LinkContainer>
                </div>
            </Card>
        </div>
    )
}

export default Item;