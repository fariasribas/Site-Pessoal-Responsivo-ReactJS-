import React, { useEffect } from "react";
import "./styles.css";

const Header = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const header = document.querySelector(".header");
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para verificar a rolagem e alterar a classe do cabeçalho
  function checkScroll() {
    const header = document.getElementById("header");
    const currentPath = window.location.pathname;

    // Verifica se a rota é '/blog'
    if (currentPath.startsWith("/blog")) {
      // Se estiver na página do blog, aplica a classe específica
      header.classList.add("header-blog");
      header.classList.remove("header-scrolled", "header-d");
      return; // Não continua com o código de rolagem
    }

    const section1 = document.getElementById("section1");

    // Certifica-se de que a seção1 existe antes de tentar usá-la
    if (section1) {
      const section1Bottom = section1.offsetTop + section1.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= section1Bottom) {
        header.classList.add("header-scrolled");
        header.classList.remove("header-d");
      } else {
        header.classList.remove("header-scrolled");
        header.classList.add("header-d");
      }
    }
  }

  // Adiciona o ouvinte de evento para rolagem
  window.addEventListener("scroll", checkScroll);

  // Verifica a posição ao carregar a página
  document.addEventListener("DOMContentLoaded", checkScroll);

  return (
    <header id="header" className="header">
      <nav className="nav">
        <button
          onClick={() =>
            (window.location.href = "https://apps.fariasribas.com.br")
          }
        >
          Apps
        </button>
        <button onClick={() => (window.location.href = "/blog")}>Blog</button>
        <button onClick={() => (window.location.href = "/#contato")}>
          Contato
        </button>
        <button onClick={() => (window.location.href = "/#sobre")}>
          Sobre
        </button>
      </nav>
    </header>
  );
};

export default Header;
