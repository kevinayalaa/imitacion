/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import Okey from './componentes.js/Okey.js'
import liliana from './imagen/liliana.png'
import cafe from './imagen/cafe.png'
import Post from './componentes.js/Post.js';
import Post2 from './componentes.js/Post2';
function App() {

   
  const Boton = ()=> {
     alert("holaa");
   }

  return (
    <div className="App">
    
    
     <a          className="App-link"
          href="https://www.instagram.com/lilianmonje._2/"
          target="_blank"
          rel="noopener noreferrer">
          inicio
        </a>
   
        <a          className="App-link"
          href="https://www.instagram.com/lilianmonje._2/"
          target="_blank"
          rel="noopener noreferrer">
          contacto
        </a>
        <a          className="App-link"
          href="https://www.instagram.com/lilianmonje._2/"
          target="_blank"
          rel="noopener noreferrer">
          about
        </a>
        <a          className="App-link"
          href="https://www.instagram.com/lilianmonje._2/"
          target="_blank"
          rel="noopener noreferrer">
          post
        </a>
   

     <button className='boton' onClick={Boton}>okeyy</button>
     <Okey nombre="de la tecnologia" edad="22" color="blue" />
     <img src={liliana} style={{margin: "20px", borderStyle: "dotted" , color: "ButtonFace" }} />
 <h3>UN MEJOR ARTICULO</h3>
  <img src={cafe}></img>  

<Post />   
<Post2 />


    </div>
 );
}

export default App;
