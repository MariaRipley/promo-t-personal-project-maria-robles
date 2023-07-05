//React
import { Link } from "react-router-dom";

function Question1() {
  return (
    <>
      <h2>1. Primera pregunta</h2>
      <button>
        <Link to="/Question2">Enviar y siguiente</Link>
      </button>
    </>
  );
}

export default Question1;
