import { useState } from "react";

const Titulo = ({ cambiarTitulo }) => {
  const [argegarTitulo, setAgregarTitulo] = useState("");


  return (
    <main>
      <h1>
        Hello {cambiarTitulo} {argegarTitulo}
      </h1>
      <button onClick={() => setAgregarTitulo("(from changed state)!")}>
        Click me!
      </button>
    </main>
  );
};

export default Titulo;
