import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import BlogList from "./BlogList";
import Blog from "./Blog"; // Importa o componente Blog
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa o Font Awesome
import BackToHomeButton from "./BackToHomeButton";

const App = () => {
  return (
    <Router>
      <Header />
      <ConditionalBackToHomeButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:postId" element={<Blog />} />
      </Routes>
    </Router>
  );
};

// Componente para renderizar o botão condicionalmente
const ConditionalBackToHomeButton = () => {
  const location = useLocation();

  // Verifica se a rota atual é a homepage
  const isHomePage = location.pathname === "/";

  return !isHomePage ? <BackToHomeButton /> : null;
};

export default App;
