//Images
import paquita from "../../images/paquita.jpeg";

function ResultPaquita() {
  return (
    <>
      <header></header>
      <main>
        <h1>¡Eres Paquita Salas!</h1>
        <img className="img" src={paquita} alt="" />
        <p>
          Eres LA JEFA. Fuerte y directa, pero también amable y 'echá palante'.
          A curranta no te gana nadie y siempre estás dispuesta a pelear por lo
          tuyo (y los tuyos).
        </p>
      </main>
      <footer></footer>
    </>
  );
}

export default ResultPaquita;
