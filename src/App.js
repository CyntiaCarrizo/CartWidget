
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
       <ItemListContainer greeting ="Milano es una tienda especializada en vinos, espumantes, whiskys, bebidas blancas, cervezas y regaleria."></ItemListContainer>
      </header>
     
     
    </div>
  );
}

export default App;



