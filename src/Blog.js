import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import "./Blog.css"; // Adicione seu CSS para o blog aqui

const Blog = () => {
  const { postId } = useParams(); // Obtém o postId da URL
  const [title, setTitle] = useState(""); // Estado para o título
  const [content, setContent] = useState(""); // Estado para o conteúdo

  useEffect(() => {
    // Função para carregar o arquivo Markdown
    const loadPost = async () => {
      try {
        const response = await fetch(`/blog-posts/${postId}.md`); // Ajuste o caminho conforme a localização dos seus arquivos
        if (!response.ok) throw new Error("Erro ao carregar o post");
        const markdownText = await response.text();

        // Converte o Markdown para HTML
        const htmlContent = marked(markdownText);

        // Extrai o título e o restante do conteúdo
        const titleMatch = markdownText.match(/^#\s(.+)/); // Captura o título do Markdown (primeiro cabeçalho nível 1)
        const postTitle = titleMatch ? titleMatch[1] : "Título do Post"; // Define um título padrão se não encontrado

        // Define os estados para título e conteúdo
        setTitle(postTitle);
        setContent(htmlContent.replace(/^<h1[^>]*>([^<]+)<\/h1>/, "")); // Remove o título do conteúdo HTML
      } catch (error) {
        console.error("Erro ao carregar o post:", error);
        setTitle("Erro");
        setContent("<p>Erro ao carregar o post.</p>");
      }
    };

    loadPost();
  }, [postId]);

  useEffect(() => {
    // Função para mudar a saudação
    const changeGreeting = () => {
      const greetingElement = document.getElementById("greeting");
      if (greetingElement) {
        const greetings = [
          "Olá!",
          "Hello!",
          "Hola!",
          "Bonjour!",
          "Hallo!",
          "Ciao!",
        ];
        let currentIndex = 0;

        const updateGreeting = () => {
          greetingElement.textContent = greetings[currentIndex];
          currentIndex = (currentIndex + 1) % greetings.length;
        };

        const intervalId = setInterval(updateGreeting, 1980);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
      }
    };

    changeGreeting();
  }, []);

  return (
    <main>
      <title className="blog-heading">
        <div className="blog-title">
          <h1>{title}</h1>
        </div>
      </title>
      <article className="blog-body">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
      <section id="contato" className="section5">
        <div className="heading4">
          <h2 id="greeting">Oi!</h2>
          <span className="subheading4">
            <a href="https://wa.me/5511972988642">Contato</a>
          </span>
        </div>
      </section>
      <footer id="section6" className="section6">
        <div className="footer-contact">
          <ul className="contact-list">
            <li>
              <a href="https://wa.me/5511972988642" className="contact-item">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </li>
            <li>
              <a href="tel:+5511972988642" className="contact-item">
                <i className="fas fa-phone"></i> (11) 97298-8642
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@fariasribas.com.br"
                className="contact-item"
              >
                <i className="fas fa-envelope"></i> contato@fariasribas.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="footerendereco">
          <p className="address-line">
            <b>São Paulo | Brasil</b>
          </p>
          <p className="address-line">Nazaré Paulista</p>
          <p className="address-line">
            <b>2K24</b>
          </p>
        </div>
        <nav className="footerindex">
          <ul className="footer-nav">
            <li>
              <a href="https://apps.fariasribas.com.br" className="nav-link">
                Apps
              </a>
            </li>
            <li>
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="/#contato" className="nav-link">
                Contato
              </a>
            </li>
            <li>
              <a href="/#sobre" className="nav-link">
                Sobre
              </a>
            </li>
          </ul>
        </nav>

        <div className="footersocialmedia">
          <div className="social-media-text">
            Siga-nos nas redes sociais. (Em breve)
          </div>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Blog;
