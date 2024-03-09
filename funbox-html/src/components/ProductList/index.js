import React from "react";
import Product from "../Product";
import "./style.scss";

const products = [
  {
    title: "Fabulous oversea viand",
    name: "Yummy",
    addition: "with foie gras",
    portionsAmount: "10",
    details: ["bonus: mouse"],
    ingredients: "Stewed duck liver with artichokes",
    image:
      "https://raw.githubusercontent.com/s-pyadyshev/funbox-html/master/src/assets/img/cat.png",
    weight: "0,5",
    quantity: 2,
  },
  {
    title: "Fabulous oversea viand",
    name: "Yummy",
    addition: "with fish",
    portionsAmount: "40",
    details: ["bonus: 2 mice"],
    ingredients: "Pike heads with garlic and fresh salmon",
    image:
      "https://raw.githubusercontent.com/s-pyadyshev/funbox-html/master/src/assets/img/cat.png",
    weight: "2",
    quantity: 1,
  },
  {
    title: "Fabulous oversea viand",
    name: "Yummy",
    addition: "with chicken",
    portionsAmount: "100",
    details: ["bonus: 5 mice", "client is happy"],
    ingredients: "Chicken fillet with truffles and soup stock",
    image:
      "https://raw.githubusercontent.com/s-pyadyshev/funbox-html/master/src/assets/img/cat.png",
    weight: "5",
    quantity: 0,
  },
];

const renderProducts = () =>
  products.map((productProps, index) => (
    <li key={index}>
      <Product {...productProps} />
    </li>
  ));

const ProductList = () => <ul className="product-list">{renderProducts()}</ul>;

export default ProductList;
