import React from "react";
import { isFileAllowed } from "../../utils/utils";
import { ALLOWED_FILE_FORMATS, ALLOWED_IMAGE_FORMATS } from "../../constants";
import "./style.scss";

const DragAndDrop = (props) => {
  const { data, dispatch, children } = props;

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth + 1 });
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: "SET_DROP_DEPTH", dropDepth: data.dropDepth - 1 });

    if (data.dropDepth > 0) return;

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "copy";

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // current selected or moving file
    const file = [...event.dataTransfer.files][0];
    let fileReader = new FileReader();

    if (isFileAllowed(ALLOWED_FILE_FORMATS, file)) {
      let fileReader;
      fileReader = new FileReader();
      fileReader.onloadend = () => {
        const content = JSON.parse(fileReader.result).galleryImages;

        dispatch({
          type: "ADD_JSON_TO_LIST",
          files: content,
        });
      };
      fileReader.readAsText(file);
    }

    if (isFileAllowed(ALLOWED_IMAGE_FORMATS, file)) {
      let img = new Image();
      // Read file as Data URL - convert image to base64
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        img.src = fileReader.result;
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
        };
      };
    }

    fileReader.onabort = () => {
      alert("Reading aborted");
    };

    fileReader.onerror = () => {
      alert("Reading error");
    };

    event.dataTransfer.clearData();

    dispatch({
      type: "SET_DROP_DEPTH",
      dropDepth: 0,
    });

    dispatch({
      type: "SET_IN_DROP_ZONE",
      inDropZone: false,
    });
  };

  return (
    <div
      className={
        data.inDropZone ? "drag-drop-zone inside-drag-area" : "drag-drop-zone"
      }
      onDrop={(event) => handleDrop(event)}
      onDragOver={(event) => handleDragOver(event)}
      onDragEnter={(event) => handleDragEnter(event)}
      onDragLeave={(event) => handleDragLeave(event)}
    >
      <div className="drag-drop-zone-label">
        Drag and drop file (image or json) to upload
      </div>
      {children}
    </div>
  );
};

export default DragAndDrop;
