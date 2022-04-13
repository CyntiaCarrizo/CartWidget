
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

import './CssPersonal/CssPersonalizado.css'
import ItemDetailContainer from './Components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      <ItemDetailContainer></ItemDetailContainer>
      </header>
     
     
    </div>
  );
}

export default App;



