//Images
import landing from "../../images/landing-ps.png";

//Styles
import "../../styles/layout/_home.scss";

function Home() {
  return (
    <main className="homeMain">
      <h1 className="homeMain__title">¿Qué personaje de Paquita Salas eres?</h1>
      <img className="homeMain__img" src={landing} alt="" />
      <p className="homeMain__text">Bienvenida a PS Management...</p>
      <button className="homeMain__btn">Comenzar el test</button>
    </main>
  );
}

export default Home;
