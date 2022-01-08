import ItemCount from './components/ItemListContainer/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
      <>
        <VideoBackground/>

        <NavBar/>

        <ItemListContainer greeting="¡Hola Mundo!"/>

        <ItemCount initial={1} stock={5}/>
      </>
  );
}

export default App;
