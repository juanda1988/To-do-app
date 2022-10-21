import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";

function App(props) {
  return (
    <h1>
      {props.saludo}, {props.nombre}
    </h1>
  );
}

function withwhatever() {
  return function ComponenteDeVerdad(props) {
    return <h2>Buenassss!</h2>;
  };
}

const AppWithWharever = withwhatever(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App saludo="Buenas" nombre="Nath" />);
