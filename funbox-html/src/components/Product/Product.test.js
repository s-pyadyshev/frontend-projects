import React from "react";
import ReactDOM from "react-dom";
import Product from "./index";

const props = {
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
};

it("Product renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Product {...props} />, div);
});
