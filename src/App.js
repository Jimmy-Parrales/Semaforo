import './App.css';
import React from "react";
import { useState } from "react";
import '../src/Componentes/estilos.css';
function App() {
  const [color,setColor]=useState("");
  return (
    <div className="App">
    <div className="d-flex justify-content-center pa-5">
			<div className="fondo met-5">
				<div className={`circulo red ${"red"===color?"active":""}`} onClick={()=>setColor("red")}></div>
				<div className={`circulo yellow ${"yellow"===color?"active":""}`} onClick={()=>setColor("yellow")}></div>
				<div className={`circulo green ${"green"===color?"active":""}`} onClick={()=>setColor("green")}></div>
			</div>
		</div>
    </div>
  );
}

export default App;
