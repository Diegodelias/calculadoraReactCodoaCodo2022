import React, { useState, useContext, useRef } from "react";
import { botonesCelestes } from "../jsons/botonesCeleste";
import { GeneralContext } from "../Contexts/GeneralContext";

function BotoneraInferior() {
  const {
   
   
   
    pantalla,
    setPantalla,
  } = useContext(GeneralContext);

   let numero = useRef("")
  let resultado = useRef(0)
  let tipoOperacion = useRef("")
  let tecla = useRef("")

  // const [tecla, setTecla] = useState();
  const [botones, setBoton] = useState([
    {
      key: 7,
      claseDiv: "",
      id: "siete",
      value: "7",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: 8,
      claseDiv: "",
      id: "ocho",
      value: "8",
      clase: " btn btn-dark btn-square-md",
    },
    {
      key: 9,
      claseDiv: "",
      id: "nueve",
      value: "9",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: "-",
      claseDiv: "",
      id: "resta",
      value: "-",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: "ac",
      claseDiv: "",
      id: "ac",
      value: "ac",
      clase: " btn btn-dark btn-square-md",
    },
    {
      key: "=",
      claseDiv: "igual",
      id: "igual",
      value: "=",
      clase: "btn-igual",
    },
    {
      key: ".",
      claseDiv: "",
      id: "punto",
      value: ".",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: "0",
      claseDiv: "",
      id: "cero",
      value: "0",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: "π",
      claseDiv: "",
      id: "",
      value: "π",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: "suma",
      claseDiv: "",
      id: "+",
      value: "+",
      clase: "btn btn-dark btn-square-md",
    },
    {
      key: "MR",
      claseDiv: "",
      id: "MR",
      value: "MR",
      clase: " btn btn-dark btn-square-md",
    },
  ]);

  const procesarTecla = (event) => {
     tecla = event.target.value;
    console.log(numero)
    console.log(resultado)
    // console.log(tipoOperacion)
 
   
    
    if (isNaN(tecla)) {
      //  suma
      if (tecla === "+") {
        setPantalla("+");
        tipoOperacion.current = "suma";
        if (resultado.current == 0) {
          resultado.current = parseFloat(numero.current);
          numero.current = ""
        }

        if (numero.current !== "") {
          resultado.current = parseFloat(resultado.current) + parseFloat(numero.current);
        
          numero.current = ""
        }
      }

      //  resta
      if (tecla === "-") {
        setPantalla("-");
        tipoOperacion.current = "resta";
        if (resultado.current == 0) {
          resultado.current = parseFloat(numero.current);
          numero.current="";
        }

        if (numero.current != "") {
          resultado.current = parseFloat(resultado.current) - parseFloat(numero.current);
          numero.current="";
        }
      }

      //multiplicacion

      if (tecla === "*") {
        setPantalla("*");
        tipoOperacion.current = "multiplicar";
        if (resultado.current == 0) {
          resultado.current = parseFloat(numero.current);
          numero.current = "";
         
         
        }
        

        if (numero.current !== "" && resultado.current > 0) {
          
          resultado.current = parseFloat(resultado.current) * parseFloat(numero.current);
          numero.current ="";
          
        }
      }

      //division

      if (tecla === "/") {
        setPantalla("/");
        tipoOperacion.current="dividir";
        if (resultado.current === 0) {
          resultado.current = parseFloat(numero.current);
          numero.current ="";
        }

        if (numero.current != "") {
          resultado.current = parseFloat(resultado.current) / parseFloat(numero.current);
          numero.current="";
        }
      }

      //potencia de 2

      if (tecla === "X²") {
          if (numero.current != ""){
            numero.current = Math.pow(parseFloat(numero.current), 2);
            setPantalla(numero.current);

          } else {

            numero.current = Math.pow(parseFloat(resultado.current), 2);
            setPantalla(numero.current);

          }
         
          
       
      }

      //potencia de 3
      if (tecla === "X³") {
        numero.current = Math.pow(parseFloat(numero.current), 3);

        setPantalla(numero.current);
      }

      //igual (resultado)
      if (tecla === "=") {
        //suma
        
        if (tipoOperacion.current == "suma") {
          resultado.current = (parseFloat(resultado.current) + parseFloat(numero.current));
          
          setPantalla(resultado.current);
          tipoOperacion.current="";
          numero.current = "";
        }
        //resta
        if (tipoOperacion.current == "resta") {
          resultado.current = (parseFloat(resultado.current) - parseFloat(numero.current));
          setPantalla(resultado.current);
          tipoOperacion.current ="";
          numero.current = "";
        }

        //multiplicar
        if (tipoOperacion.current == "multiplicar") {
        
          resultado.current = ((parseFloat(resultado.current)) * (parseFloat(numero.current)));
          setPantalla(resultado.current);
          tipoOperacion.current ="";
          numero.current = "";
       
          
        }

        //dividir
        if (tipoOperacion.current == "dividir") {
          resultado.current = parseFloat(resultado.current) / parseFloat(numero.current);
          setPantalla(resultado.current);
          tipoOperacion.current = "";
          numero.current = "";
        }
      }

      if (tecla === ".") {
        
         numero.current = numero.current + tecla;

        setPantalla(numero.current);
      }

      if (tecla === "ac") {
        resultado.current = "Tu resultado...";
        setPantalla(resultado.current);
        numero.current = "";
        resultado.current = 0;
        tipoOperacion.current = "";

      }

      if (tecla === "SIN") {
      
         numero.current = Math.sin(parseFloat(numero.current));

        setPantalla(numero.current);

        if (resultado.current != 0) {
          resultado.current = Math.sin(parseFloat(resultado.current));

          setPantalla(resultado.current);
        }
      }

      if (tecla === "COS") {
         numero.current = Math.cos(parseFloat(numero.current));

        setPantalla(numero.current);

        if (resultado.current != 0) {
          resultado.current = Math.cos(parseFloat(resultado.current));

          setPantalla(resultado.current);
        }
      }

      if (tecla === "raiz" ) {
      
        
        if (numero.current != "") {
           numero.current = Math.sqrt(numero.current);
           setPantalla(numero.current);
        } else {


          numero.current = Math.sqrt(resultado.current)
          setPantalla(numero.current);

        }


        
       
    

        // if (resultado.current != 0) {
        //   resultado.current = Math.sqrt(resultado.current);

        //   setPantalla(resultado.current);
          
        // }
      }


      if (tecla === "log") {
        numero.current = Math.log(parseFloat(numero.current));

       setPantalla(numero.current);

       if (resultado.current != 0) {
         resultado.current = Math.log(10, parseFloat(resultado.current));

         setPantalla(resultado.current);
       }
     }
    
     
     if (tecla === "backspace") {
    //   numero.current = Math.log(parseFloat(numero.current));
     
    //  setPantalla(numero.current);

    //  if (resultado.current != 0) {
    //    resultado.current = Math.log(10, parseFloat(resultado.current));

    //    setPantalla(resultado.current);
      if(numero.current !== ""){
        numero.current = numero.current.toString().substr(0, numero.current.toString().length - 1);
      
        setPantalla(numero.current);

        //numero.current = parseFloat(numero.current)

      }
      


     }
   



     if (tecla === "π") {
      numero.current = 3.14;

     setPantalla(numero.current);

   }


     if (tecla === "tg") {
      numero.current = Math.tan(parseFloat(numero.current));

     setPantalla(numero.current);

     if (resultado.current != 0) {
       resultado.current = Math.tan(parseFloat(resultado.current));

       setPantalla(resultado.current);
     }
   }


      if (tecla === "∛") {
        if (numero.current != "") {
          numero.current = Math.pow(parseFloat(numero.current), 1 / 3);
        }

        setPantalla(numero.current);

        if (resultado.current != 0) {
          resultado.current = Math.pow(parseFloat(resultado.current), 1 / 3);

          setPantalla(resultado.current);
        }
      }
    } else {
      

      if (numero.current === ""){
      
        numero.current = tecla;
        setPantalla(tecla)
      } else if (numero.current != "" )  {
       // numero.current = numero.current.concat(tecla);
        numero.current = `${numero.current}${tecla}`;
        setPantalla(numero.current)
        numero.current = parseFloat(numero.current)

      }
      // else if (numero.current){
      //   numero.current = numero.current.concat(tecla);
      //   setPantalla(numero.current)

      // }

      else {
        
        numero.current = numero.current.concat(tecla);
        setPantalla(numero.current)
        numero.current = parseFloat(numero.current)


      }
      

      
    }
  };

  // ]);

  const res = botones.map(({ key, id, value, clase, claseDiv }) => {
    return (
      <div className={claseDiv} key={key}>
        <button
          type="button"
          className={clase}
          id={id}
          value={value}
          onClick={(event) => procesarTecla(event)}> 
          {id === "raiz" ?<i className="fa-solid fa-square-root-variable"></i> :
          value }
        </button>
      </div>
    );
  });

  const resultadoBotonesCelestes = botonesCelestes.map(
    ({ key, id, value, clase, simbolo }) => {
  


     
        return (
          <div key={key}>
            <button
              type="button"
              className={clase}
              id={id}
              value={value}
              onClick={(event) => procesarTecla(event)}
            >
              {simbolo}
            </button>
          </div>
        );
      
    }
  );
  // <button type="button" class="btn btn-dark btn-square-md" id=" " value="<i className=&quot;fa-solid fa-square-root-variable&quot;></i>"><i class="fa-solid fa-square-root-variable"></i></button>

  // <button type="button" class="btn btn-dark btn-square-md" id="raiz" value="raiz">&lt;i className="fa-solid fa-square-root-variable"&gt;&lt;/i&gt;</button>

  return (
    <>
      <div className="container calculadora-numeros-celeste">
        <div class="grid">{resultadoBotonesCelestes}</div>
      </div>

      <div class="container calculadora_parte_inferior">
        <div className="grid2">{res}</div>
      </div>
      <i class="fa-solid fa-square-root-variable"></i>
    </>
  );
}

export default BotoneraInferior;
