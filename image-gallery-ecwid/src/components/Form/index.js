import React, { useState } from "react";
import { isFileAllowedURL } from "../../utils/utils";
import { ALLOWED_FILE_FORMATS, ALLOWED_IMAGE_FORMATS } from "../../constants";
import "./style.scss";

const Form = (props) => {
  const { dispatch } = props;
  const [textInput, setTextInput] = useState("");
  const [errorData, setErrorData] = useState("");

  let fileReader;

  const handleInputText = (event) => {
    setTextInput(event.target.value);
  };

  const addJsonURLToGallery = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "ADD_JSON_TO_LIST",
          files: data.galleryImages,
        });
      })
      .then(() => setErrorData(""));
  };

  const addImage = (imageSrc) => {
    let img = new Image();
    img.src = imageSrc;

    let file = {};
    img.onload = function () {
      const { src, width, height } = img;
      file = {
        url: src,
        width: width,
        height: height,
        ratio: width / height,
      };

      dispatch({ type: "ADD_FILE_TO_LIST", file });
      setErrorData("");
    };
  };

  const addImageToGallery = (event, isFileFromURL) => {
    if (isFileFromURL) {
      return addImage(event); // URL string
    }
    fileReader.onloadend = () => addImage(event.target.result);
  };

  const handleFileAdd = (event) => {
    event.preventDefault();
    if (isFileAllowedURL(ALLOWED_FILE_FORMATS, textInput)) {
      addJsonURLToGallery(textInput, true);
      setTextInput("");
    } else if (isFileAllowedURL(ALLOWED_IMAGE_FORMATS, textInput)) {
      addImageToGallery(textInput, true);
      setTextInput("");
    } else {
      setErrorData("Invalid url or file type is not allowed");
    }
  };

  return (
    <form className="form">
      <div className="control">
        <input
          className="input"
          type="text"
          onChange={handleInputText}
          value={textInput}
        />

        <div className="control__error color-error">{errorData}</div>
      </div>
      <button className="button" onClick={handleFileAdd}>
        Upload file (JSON or Image)
      </button>
    </form>
  );
};

export default Form;
