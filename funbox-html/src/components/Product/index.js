import React, { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import "./../../assets/styles/helpers.scss";

const Product = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isHoveredOnSelected, setIsHoveredOnSelected] = useState(false);
  const [firstSelect, setFirstSelect] = useState(true);

  const {
    title,
    name,
    addition,
    portionsAmount,
    details,
    ingredients,
    image,
    weight,
    quantity,
  } = props;

  const toggleHover = () => {
    if (isSelected) {
      setIsHoveredOnSelected(!isHoveredOnSelected);
      setFirstSelect(false);
    }
    setIsHovered(!isHovered);
  };

  const handleClick = () => {
    if (isSelected) {
      setFirstSelect(true);
    }
    setIsSelected(!isSelected);
  };

  const productClass = classNames({
    product: true,
    "is-hovered": isHovered,
    "is-selected": isSelected,
    "is-disabled": quantity === 0,
  });

  return (
    <div className={productClass}>
      <div
        className="product__body"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={handleClick}
      >
        <div className="product__main">
          {isHovered && isSelected && !firstSelect ? (
            <span className="color-selected-hover">Doesn't your kitteh approve?</span>
          ) : (
            <span className="product__title">{title}</span>
          )}
          <h3 className="product__name">{name}</h3>
          <div className="product__addition">{addition}</div>
          <div className="product__details">
            <div className="product__portions">
              <strong>{portionsAmount}</strong>&nbsp;portions
            </div>
            <div className="product__gift">
              {details.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </div>
          <img
            className="product__image"
            src={image}
            alt={title}
            width="370"
            height="361"
          />
          <div className="product__weight">
            {weight}
            <div className="product__weight-unit">kg</div>
          </div>
        </div>
      </div>
      <div className="product__footer">
        {!isSelected && quantity !== 0 ? (
          <span>
            What are you waiting for? Make the kitteh happy,&nbsp;
            <span className="product__buy" onClick={handleClick}>
              buy
            </span>
            .
          </span>
        ) : null}
        {isSelected ? (
          <span>{ingredients}</span>
        ) : null}
        {quantity === 0 ? (
          <span className="color-disabled-note">
            {`Sad, ${addition} is out of stock.`}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
