import React, { useState, useEffect } from "react";
import Image from "../Image";
import "./style.scss";
import useElementSize from "../../hooks/useElementSize";

const Gallery = (props) => {
  const { storeImages, dispatch } = props;
  const [resizedImages, setResizedImages] = useState(storeImages);
  const [elemSize, elemRef] = useElementSize(0);

  let CONTAINER_WIDTH = elemSize.width;
  let MIN_HEIGHT = 200;

  if (elemSize.width < CONTAINER_WIDTH) {
    CONTAINER_WIDTH = elemSize.width;
    MIN_HEIGHT = 100;
  } else if (elemSize.width < 640) {
    MIN_HEIGHT = 300;
  }

  // remove image
  const handleImageDelete = (imageIndex) => {
    dispatch({
      type: "REMOVE_IMAGE",
      index: imageIndex,
    });
  };

  useEffect(() => {
    let resizedImages = [];
    let widthSum = 0;
    let currentRow = [];

    storeImages.forEach(({ width, height, ratio, url }, index, images) => {
      currentRow.push({
        width,
        height,
        ratio,
        url,
      });

      widthSum += MIN_HEIGHT * ratio;

      // new row
      if (widthSum > CONTAINER_WIDTH) {
        const updatedCurrentRow = currentRow.map((image) => {
          const widthSumPercent = widthSum / 100;
          const percentageDiff = (widthSum - CONTAINER_WIDTH) / widthSumPercent;

          const newHeight = MIN_HEIGHT - MIN_HEIGHT * (percentageDiff / 100);

          return {
            ...image,
            height: newHeight,
            width: newHeight * image.ratio,
          };
        });

        resizedImages = [...resizedImages, ...updatedCurrentRow];
        currentRow = [];
        widthSum = 0;
        // last row
      } else if (index === images.length - 1 && widthSum < CONTAINER_WIDTH) {
        const updatedCurrentRow = currentRow.map((image) => {
          return {
            ...image,
            height: MIN_HEIGHT,
            width: MIN_HEIGHT * image.ratio,
          };
        });

        resizedImages = [...resizedImages, ...updatedCurrentRow];
        currentRow = [];
        widthSum = 0;
      }
    });

    setResizedImages(resizedImages);
  }, [storeImages, elemSize]);

  const renderImages = () => {
    return resizedImages.map((image, index) => {
      return (
        <li
          key={index}
          className="gallery__item"
          style={{
            width: image.width,
            height: image.height,
          }}
        >
          <Image url={image.url} />
          <button
            className="gallery__item-remove"
            onClick={() => handleImageDelete(index)}
          >
            Remove
          </button>
        </li>
      );
    });
  };

  return (
    <div className="gallery" ref={elemRef}>
      <ul className="gallery__list">{renderImages()}</ul>
    </div>
  );
};

export default Gallery;
