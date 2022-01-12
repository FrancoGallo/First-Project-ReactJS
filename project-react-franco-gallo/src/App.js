import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';
import 'bootstrap/dist/css/bootstrap.min.css' // El CSS de boostrap
import '../src/App.css'

function App() {
  return (
      <>
        <VideoBackground/>

        <NavBar/>

        <main>
          <ItemListContainer/>
        </main>
      </>
  );
}

export default App;
