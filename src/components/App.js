//React

//Images
import landing from "../images/landing-ps.png";

//Styles

function App() {
  return (
    <>
      <header></header>
      <main>
        <h1>¿Qué personaje de Paquita Salas eres?</h1>
        <img className="img" src={landing} alt="" />
        <p>Bienvenida a PS Management...</p>
        <button>Comenzar el test</button>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
