import 'bootstrap/dist/css/bootstrap.min.css' // El CSS de boostrap
import '../src/App.css'
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';
import ItemDetailContainer from './components/Items/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/Cart/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <VideoBackground/>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/marca/:idTag' element={<ItemListContainer/>}/>
            <Route exact path='/detail/:idDetail' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
