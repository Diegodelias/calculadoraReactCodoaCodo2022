import React, {useContext, useState , useEffect} from "react";
import {GeneralContext} from "../Contexts/GeneralContext"


function Visor() {

  const  {numero , setnumero , resultado , setResultado , tipoOperacion , setTipoOperacion , pantalla , setPantalla} = useContext(GeneralContext);
 
  const [localPantalla , setLocalPantalla] = useState(null);
  

  useEffect(() => {
    setLocalPantalla(pantalla)
  },[pantalla]);

 
 
  return (
    <div className="visor d-flex align-items-center justify-content-center  ">
      <div className="d-flex flex-column pantalla justify-content-center ps-5">
       { (localPantalla === null) ?(
        <div id="resultado">Tu resultado...</div>)
        : (<div id="resultado">{localPantalla}</div>)}
      </div>
    </div>
  )
}

export default Visor