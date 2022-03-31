import React from "react";
 

function Okey ( props ) {

//fuctiones de parametros


    const Okey = (a, b)=> {
        alert(b.type);
   }
    return(<div >
       <p style={{backgroundColor:  props.color}}>hola mis queridos lectores  {props.nombre}</p>
       <button onClick={(event) =>  Okey("gol", event )}> buto</button>
       </div>
    )
}


export default Okey ;