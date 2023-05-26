import React, { useState, useEffect } from "react";
import "./Gallery.css";
import galleryData from "../config/gallery.json";

const Gallery = () => {
  const [category, setCategory] = useState(galleryData);
  const [filteredData, setFilteredData] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState("exteriores");

  useEffect(() => {
    filterItem("exteriores");
  }, []);

  const filterItem = (categoryName) => {
    const updateItems = galleryData.filter((item) => {
      return item.category === categoryName;
    });

    setCategory(updateItems);
    setFilteredData(true);
    setSelectedButton(categoryName);
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? category.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === category.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery__container">
      <div className="center-container">
        <div className="button-grid">
          <button
            className={`btn-galery ${
              selectedButton === "exteriores" ? "active" : ""
            }`}
            onClick={() => filterItem("exteriores")}
          >
            exteriores
          </button>
          <button
            className={`btn-galery ${
              selectedButton === "interiores" ? "active" : ""
            }`}
            onClick={() => filterItem("interiores")}
          >
            interiores
          </button>
          <button
            className={`btn-galery ${
              selectedButton === "cocina" ? "active" : ""
            }`}
            onClick={() => filterItem("cocina")}
          >
            cocinas
          </button>
          <button
            className={`btn-galery ${
              selectedButton === "baños" ? "active" : ""
            }`}
            onClick={() => filterItem("baños")}
          >
            baños
          </button>
          <button
            className={`btn-galery ${
              selectedButton === "escaleras" ? "active" : ""
            }`}
            onClick={() => filterItem("escaleras")}
          >
            escaleras
          </button>
          <button
            className={`btn-galery ${
              selectedButton === "piscina" ? "active" : ""
            }`}
            onClick={() => filterItem("piscina")}
          >
            piscinas
          </button>
        </div>
      </div>
      <div className="container__images">
        {category.map((item, index) => (
          <img
            key={item.url}
            src={item.url}
            alt={item.category}
            className="gallery__img"
            loading="lazy"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={category[selectedImageIndex].url}
            alt={category[selectedImageIndex].category}
            className="modal-content"
          />
          <span className="prev" onClick={showPreviousImage}>
            &#10094;
          </span>
          <span className="next" onClick={showNextImage}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
