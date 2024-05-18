import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <img className="category__img" src={item.img} />
      <div className="category__info">
        <h1 className="category__title">{item.title}</h1>
        <button className="category__btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
