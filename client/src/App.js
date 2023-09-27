import React, { useEffect, useState } from "react";
import "./App.css";

import socket from "./ImageCapture/socket";

function App() {
  const [resultImage, setResultImage] = useState("");

  useEffect(() => {
    console.log("useEffect executed");
    socket.emit("MessageFromAndroid", "message");

    return () => {
      socket.off("MessageFromAndroid");
    };
  }, []);

  useEffect(() => {
    socket.on("information", (data) => {
      console.log(data, "data result");
      setResultImage(data.result_image);
    });

    return () => {
      socket.off("Information");
    };
  }, []);

  return (
    <div className="App">
      <img
        src={resultImage !== "" ? `data:image/png;base64,${resultImage}` : ""}
        alt="result image"
        style={{ width: "700px", height: "600px", border: "1px solid black" }}
      />
    </div>
  );
}

export default App;
