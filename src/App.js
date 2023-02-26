import {React, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Perfil from "./components/views/Perfil"
import Contacto from "./components/views/Contacto"
import Home from "./components/views/Home"
import Contexto from "./components/contexto/Contexto";

function App() {

  const [programadores, setProgramadores] = useState([]);
  //const endpoint = "/programadores.json";
  const mostrarData = async () => {
    const response = await fetch("https://api.npoint.io/3f6b7b130fac0eb85533");
    const data = await response.json();

    setProgramadores(data);
    // console.log(data);
  };
  useEffect(() => {
    mostrarData();
  }, []);


return (
  <>
     <Contexto.Provider value={{ programadores, setProgramadores }}>
      <BrowserRouter>
        
        <Routes>
          <Route path="/freecoders/">
            <Route path=":id" element={< Perfil />} />
            
          </Route>
          <Route path="/contacto/">
          <Route path=":id" element={< Contacto />} /> 
          </Route>

          <Route path="/" element={<Home />} />
    
        </Routes>
      </BrowserRouter>
    </Contexto.Provider>
  </> 
);
}

export default App;
