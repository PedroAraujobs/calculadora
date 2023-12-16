import React from 'react'
import { useState } from 'react';

export default function Calc() {
    const [primeiroNumero, setPrimeiroNumero] = useState("");
    const [segundoNumero, setSegundoNumero] = useState("");
    const [operador, setOperador] = useState(null);
    const [resultado, setResultado] = useState(0);
    
  const ClicarOperador = (item) => {
    setOperador(item.target.value)
  }
 
  const mostrarResult = () => {
    calcular

  }

  
  const calcular = () => {
    
    switch (operador) {
      case "+":
        resultado = Number(primeiroNumero) + Number(segundoNumero);
        break;
      case "-":
        resultado = Number(primeiroNumero) - Number(segundoNumero);
        break;
      case "*":
        resultado = Number(primeiroNumero) * Number(segundoNumero);
        break;
      case "/":
        resultado = Number(primeiroNumero) / Number(segundoNumero);
        break;
      default:
        break;
    }

    
    }

  return (
    <section>
        <input type="text" value={primeiroNumero} onChange={(e) => setPrimeiroNumero(e.target.value)} />
        <input type="text"  value={segundoNumero} onChange={(e) => setSegundoNumero(e.target.value)} />
       <button onClick={ClicarOperador} value={"+"}>+</button>
       <button onClick={ClicarOperador} value={"-"}>-</button>
       <button onClick={ClicarOperador} value={"*"}>*</button>
       <button onClick={ClicarOperador} value={"/"}>/</button>
       <button onClick={mostrarResult}>=</button>
        <div>{resultado}</div>

    </section>
  )
}
