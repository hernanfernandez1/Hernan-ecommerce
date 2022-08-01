

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='PRODUCTOS' />
      <ItemDetailContainer/>
    </>
  );
}

export default App;
