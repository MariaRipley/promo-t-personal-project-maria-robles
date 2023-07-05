//React
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

//Images

//Styles
import "../styles/App.scss";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
