import 'bootstrap/dist/css/bootstrap.min.css' // El CSS de boostrap
import '../src/App.css'
import ItemListContainer from './components/Items/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';
import ItemDetailContainer from './components/Items/ItemListContainer/ItemList/Item/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <>
        <VideoBackground/>

        <NavBar/>

        <main>
          <ItemListContainer/>

          <ItemDetailContainer/>
        </main>
      </>
  );
}

export default App;
