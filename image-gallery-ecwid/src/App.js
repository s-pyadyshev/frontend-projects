import React from "react";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import DragAndDrop from "./components/DragAndDrop";
import { reducer } from "./store/store";
import "./App.scss";

function App() {
  const [data, dispatch] = React.useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  return (
    <div className="app">
      <div className="container full-height">
        <Form dispatch={dispatch} />
        <DragAndDrop data={data} dispatch={dispatch}>
          <Gallery storeImages={data.fileList} dispatch={dispatch} />
        </DragAndDrop>
      </div>
    </div>
  );
}

export default App;
