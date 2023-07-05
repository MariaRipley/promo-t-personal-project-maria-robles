//React
import { Link } from "react-router-dom";

function Question2() {
  return (
    <>
      <h2>2. Segunda pregunta</h2>
      <button>
        <Link to="/Question3">Enviar y siguiente</Link>
      </button>
    </>
  );
}

export default Question2;
