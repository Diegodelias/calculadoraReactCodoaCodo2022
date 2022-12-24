import Visor from "./componentes/Visor";
import "./App.css";
import  {GeneralContext} from "./Contexts/GeneralContext"
import React , {useState} from "react";
import BotoneraInferior from "./componentes/BotoneraInferior";

function App() {
  
  const [resultado,setResultado] = useState(0)
  const [tipoOperacion, setTipoOperacion]= useState("")
  const [pantalla,setPantalla] = useState(null)

  
  return (
    <div class="container d-flex align-items-center justify-content-center vh-100 ">
      <div class="row ">
        <div class="container d-flex align-items-center justify-content-center vh-100 ">
          <div class="d-flex flex-column contenedor-calculadora">

            <GeneralContext.Provider value={{ resultado, setResultado , tipoOperacion , setTipoOperacion ,pantalla , setPantalla}}>            
            <Visor/>
          
            <BotoneraInferior/>
            
            </GeneralContext.Provider>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
