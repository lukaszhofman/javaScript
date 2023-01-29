/* import logo from './logo.svg';
import './App.css'; */
import "./style.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Ksiazki from "./pages/Ksiazki";
import Dodaj from "./pages/Dodaj";
import Aktualizuj from "./pages/Aktualizuj";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Ksiazki/>}/>
          <Route path ="/dodaj" element={<Dodaj/>}/>
          <Route path ="/aktualizuj/:id" element={<Aktualizuj/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
