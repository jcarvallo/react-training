import React from "react";
import { Button } from "reactstrap";


const Contador = props => (
  <div>
    <h1>Ejercicio de contado</h1>
    <p>{props.state.count}</p>
    {props.state.hidden && (
      <>
        <input
          onChange={props.onChange}
          name="numero_uno"
          placeholder="Ingresa un numero 1"
        />
        <br></br>
        <br></br>
        <input
          onChange={props.onChange}
          name="numero_dos"
          placeholder="Ingresa un numero 2"
        />
        <br></br>
      </>
    )}
    <br></br>
    <Button color="primary" onClick={props.Incrementar}>
      Incrementar
    </Button>{" "}
    <Button color="danger" onClick={props.Decrementar}>
      Decrementar
    </Button>{" "}
    {!props.state.hidden && (
      <Button color="warning" onClick={props.multiplicar}>
        Multiplicar
      </Button>
    )}
    {props.state.hidden && (
      <Button color="success" onClick={props.resultado}>
        Resultado
      </Button>
    )}{" "}
    <Button color="secondary" onClick={props.reset}>
      Reset
    </Button>
  </div>
);

export default Contador;
