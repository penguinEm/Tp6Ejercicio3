import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ cambiarTitulo }) => {
  const [argegarTitulo, setAgregarTitulo] = useState("");

  return (
    <section className="text-center">
      <h1>
        Hello {cambiarTitulo} {argegarTitulo}
      </h1>
      <Button variant="outline-primary" onClick={() => setAgregarTitulo("(from changed state)!")}>
        Click me!
      </Button>
    </section>
  );
};

export default Titulo;
