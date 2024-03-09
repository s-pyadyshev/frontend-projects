import React from "react";
import Loading from "../Loading";
import "./style.scss";
import useImageLoaded from "../../hooks/useImageLoaded";

const Image = (props) => {
  const { url, width, height, imageWidth } = props;
  const [ref, loaded, onLoad] = useImageLoaded();

  return (
    <>
      <img
        src={url}
        width={width}
        height={height}
        alt=".some alt text"
        ref={ref}
        onLoad={onLoad}
      />
      {!loaded ? (
        <div
          className="image-loader"
          style={{ width: imageWidth, height: height }}
        >
          <Loading />
        </div>
      ) : null}
    </>
  );
};

export default Image;
