import "./Gallery.css";
import React, { useState } from "react";
import galleryData from "../config/gallery.json";

const Gallery = () => {
  const [category, setCategory] = useState(galleryData);
  const [filteredData, setFilteredData] = useState(false);

  const filterItem = (categoryName) => {
    const updateItems = galleryData.filter((item) => {
      return item.category === categoryName;
    });

    setCategory(updateItems);
    setFilteredData(true);
  };

  return (
    <div className="gallery__container">
      <div>
        <button onClick={() => filterItem("exteriores")}>exteriores</button>
        <button onClick={() => filterItem("interiores")}>interiores</button>
        <button onClick={() => filterItem("cocina")}>cocina</button>
        <button onClick={() => filterItem("baños")}>baños</button>
        <button onClick={() => filterItem("escaleras")}>escalera</button>
        <button onClick={() => filterItem("piscina")}>piscina</button>
      </div>
      <div className="container__images">
        {category.map((item) => (
          <img
            key={item.url}
            src={item.url}
            alt={item.category}
            className="gallery__img"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
