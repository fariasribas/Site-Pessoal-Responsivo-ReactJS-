import React, { useEffect, useState } from "react";
import "./styles.css";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.4, // Duração da animação de rolagem em segundos
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const gallery1Images = document.querySelectorAll(".image-gallery1 img");
      const gallery2Images = document.querySelectorAll(".image-gallery2 img");
      const scrollPosition = window.scrollY + window.innerHeight;

      gallery1Images.forEach((img) => {
        const imageTop = img.offsetTop;
        const imageHeight = img.offsetHeight;

        if (scrollPosition > imageTop + imageHeight / 1.2) {
          img.classList.add("visible1");
        } else {
          img.classList.remove("visible1");
        }
      });

      gallery2Images.forEach((img) => {
        const imageTop = img.offsetTop;
        const imageHeight = img.offsetHeight;

        if (scrollPosition > imageTop + imageHeight / 1.2) {
          img.classList.add("visible");
        } else {
          img.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const changeGreeting = () => {
      const greetingElement = document.getElementById("greeting");
      if (greetingElement) {
        const greetings = [
          "Olá!",
          "Hello!",
          "Hola!",
          "Bonjour!",
          "Guten Tag!",
          "Ciao!",
        ];
        let currentIndex = 0;

        const updateGreeting = () => {
          greetingElement.textContent = greetings[currentIndex];
          currentIndex = (currentIndex + 1) % greetings.length;
        };

        setInterval(updateGreeting, 2000);
      }
    };

    const changeWord = () => {
      const greetingElement = document.getElementById("greeting1");
      if (greetingElement) {
        const words = [
          "Webmaster",
          "Programação",
          "SEO",
          "Marketing",
          "Pentesting",
          "Frontend",
          "Backend",
          "Apps",
          "React Native",
          "Javascript",
          "ReactJS",
        ];
        let index = 0;

        const updateWord = () => {
          greetingElement.textContent = words[index];
          index = (index + 1) % words.length;
        };

        setInterval(updateWord, 2000);
      }
    };

    const fetchPosts = () => {
      fetch("/posts.json")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Erro ao buscar posts:", error));
    };

    changeGreeting();
    changeWord();
    fetchPosts();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cria variáveis dinâmicas para os primeiros links e títulos
  const link1 = posts[0] ? `/blog/${posts[0].id}` : "";
  const link2 = posts[1] ? `/blog/${posts[1].id}` : "";
  const link3 = posts[2] ? `/blog/${posts[2].id}` : "";

  const title1 = posts[0] ? posts[0].title : "Link 1";
  const title2 = posts[1] ? posts[1].title : "Link 2";
  const title3 = posts[2] ? posts[2].title : "Link 3";

  return (
    <div>
      <main>
        <section id="section1" className="section1">
          <div className="tituloprincipal">
            <h1 id="greeting1">Farias Ribas</h1>
          </div>
        </section>

        <section id="sobre" className="section2">
          <div className="heading">
            <span className="subheading">Sobre</span>
            <h2>Sobre nós</h2>
          </div>
          <div className="image-container">
            <img
              src="/images/experiencias-digitais-design-programacao-inovacao.jpg"
              alt="Imagem representativa da interseção entre design, programação e inovação no site Farias Ribas"
              className="zooming"
            />
          </div>
          <div className="text-content">
            <p>
              Em um momento de grandes transformações, onde a tecnologia é mais
              relevante do que nunca, as pessoas buscam autenticidade - por
              conexões reais, por verdade e pelo que nos une.
              <br />
              <br />
              Nossa compreensão única da interseção entre design, programação e
              inovação nos permite criar experiências digitais que impactam e
              conectam. Para o presente e para o futuro.
            </p>

            <div className="linksobre">Farias Ribas</div>
          </div>
        </section>
        <section className="containersection3">
          <div id="apps" className="section3">
            <div className="image-gallery2">
              <div className="heading1">
                <span className="subheading1">Serviços</span>
                <h2>Nossos Serviços</h2>
              </div>
              <a href="https://wa.me/5511972988642">
                <img
                  src="/images/web-design-criacao-site-pessoal-empresa.png"
                  alt="web design - criamos seu site pessoal ou para sua empresa!"
                  className="fade-in-image"
                />
              </a>

              <a
                href="https://wa.me/5511972988642"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/marketing-ecommerce-criatividade-negocio.png"
                  alt="marketing & e-commerce - criatividade para seu negócio."
                  className="fade-in-image"
                />
              </a>
            </div>

            <div className="image-gallery1">
              <a
                href="https://wa.me/5511972988642"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/desenvolvimento-mobile-criacao-aplicativo-celular.png"
                  alt="desenvolvimento mobile - criamos seu aplicativo de celular! (app)"
                  className="fade-in-image"
                />
              </a>
              <a
                href="https://wa.me/5511972988642"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/solucoes-seguranca-pentest-seguranca-especializada.png"
                  alt="soluções em segurança e pentest - segurança por quem entende do assunto."
                  className="fade-in-image"
                />
              </a>

              <a
                href="https://wa.me/5511972988642"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/estrategia-servicos-seo-negocio-no-topo.png"
                  alt="estratégia e serviços SEO - seu negócio no topo!"
                  className="fade-in-image"
                />
              </a>
            </div>
          </div>
        </section>
        <article className="section4">
          <div className="grid-item1">
            <div className="heading3">
              <span className="subheading3">Blog</span>
              <h2>Conheça o Blog</h2>
            </div>
            <hr className="separator" />
          </div>

          <a className="grid-item2" href={link1}>
            <div className="blog-name-div">
              <div className="blog-name-div-image">
                <img
                  src="/images/lastposts/ultimos-posts-tecnologia-farias-ribas.jpg"
                  alt="Últimos posts do blog sobre tecnologia do site Farias Ribas"
                  className="blog-image"
                />
              </div>
              <div className="textolink">
                <h3>{title1}</h3>
              </div>
            </div>
            <hr className="separator" />
          </a>
          <a className="grid-item2" href={link2}>
            <div className="blog-name-div">
              <div className="blog-name-div-image">
                <img
                  src="/images/lastposts/novidades-analises-tecnologia-farias-ribas.jpg"
                  alt="Novidades e análises dos últimos posts de Farias Ribas focados em tecnologia"
                  className="blog-image"
                />
              </div>
              <div className="textolink">
                <h3>{title2}</h3>
              </div>
            </div>
            <hr className="separator" />
          </a>
          <a className="grid-item2" href={link3}>
            <div className="blog-name-div">
              <div className="blog-name-div-image">
                <img
                  src="/images/lastposts/inovacoes-tecnologicas-tendencias-digitais.jpg"
                  alt="Últimos posts do blog sobre inovações tecnológicas e tendências digitais"
                  className="blog-image"
                />
              </div>
              <div className="textolink">
                <h3>{title3}</h3>
              </div>
            </div>
            <hr className="separator" />
          </a>
          <div className="grid-item5">
            <a href="/blog">Ver Mais</a>
          </div>
        </article>

        <section id="contato" className="section5">
          <div className="heading4">
            <h2 id="greeting">Oi!</h2>
            <span className="subheading4">
              <a href="https://wa.me/5511972988642">Contato</a>
            </span>
          </div>
        </section>
      </main>
      <footer>
        <div id="section6" className="section6">
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
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
