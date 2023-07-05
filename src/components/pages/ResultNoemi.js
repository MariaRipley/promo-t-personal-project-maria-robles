//Images
import noemi from "../../images/noemi.jpg";

function ResultNoemi() {
  return (
    <>
      <header></header>
      <main>
        <h1>¡Eres Noemí Argüelles!</h1>
        <img className="img" src={noemi} alt="" />
        <p>
          Buscavidas es tu segundo nombre. Una sinvergüenza en el mejor sentido
          de la palabra. Te encanta hacerte la experta en todo y te sale bien,
          porque cada vez tienes más followers.
        </p>
      </main>
      <footer></footer>
    </>
  );
}

export default ResultNoemi;
