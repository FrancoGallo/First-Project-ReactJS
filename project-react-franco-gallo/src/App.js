import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
      <>
        <VideoBackground/>

        <NavBar/>

        <ItemListContainer greeting="¡Hola Mundo!"/>
      </>
  );
}

export default App;
