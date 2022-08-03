import Spinner from 'react-bootstrap/Spinner';

const Load = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spinner animation="border" />
        </div>
    );
}

export default Load;