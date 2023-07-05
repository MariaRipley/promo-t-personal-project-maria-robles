//React
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Quiz from "./quiz/Quiz";
import Question1 from "./quiz/Question1";
import Question2 from "./quiz/Question2";
import Question3 from "./quiz/Question3";

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
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
