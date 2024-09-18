// src/BlogList.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogList.css"; // Adicione seu CSS para o blog aqui

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Função para carregar o arquivo JSON com a lista de posts
    const loadPosts = async () => {
      try {
        const response = await fetch("/posts.json"); // Caminho para o arquivo JSON
        if (!response.ok) throw new Error("Erro ao carregar a lista de posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao carregar a lista de posts:", error);
        setPosts([]);
      }
    };

    loadPosts();
  }, []);

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
      <title className="listtitle">
        <h1 className="titlebloglist">Blog</h1>
      </title>
      <div className="blog-list">
        <article className="posts-grid">
          {posts.length ? (
            posts.map((post) => (
              <Link to={`/blog/${post.id}`} className="post-item" key={post.id}>
                <h2>{post.title}</h2>
              </Link>
            ))
          ) : (
            <p>Carregando</p>
          )}
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
      </div>
    </main>
  );
};

export default BlogList;
