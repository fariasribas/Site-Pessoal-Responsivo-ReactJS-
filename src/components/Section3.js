import React, { useEffect, useState } from "react";
import "./Section3.css";

const Section3 = () => {
  const [imagePositions, setImagePositions] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      const positions = document
        .querySelectorAll(".image-gallery img")
        .forEach((img, index) => {
          const imageTop = img.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= imageTop) {
            setImagePositions((prev) => {
              const updatedPositions = [...prev];
              updatedPositions[index] = true;
              return updatedPositions;
            });
          }
        });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="section3" className="section section3">
      <h1>Seção 3</h1>
      <div className="image-gallery">
        <img
          src="/images/bkground.jpg"
          className={imagePositions[0] ? "in-view" : ""}
          alt="Imagem 1"
        />
        <img
          src="/images/bkground.jpg"
          className={imagePositions[1] ? "in-view" : ""}
          alt="Imagem 2"
        />
        <img
          src="/images/bkground.jpg"
          className={imagePositions[2] ? "in-view" : ""}
          alt="Imagem 3"
        />
        <img
          src="/images/bkground.jpg"
          className={imagePositions[3] ? "in-view" : ""}
          alt="Imagem 4"
        />
      </div>
    </div>
  );
};

export default Section3;
