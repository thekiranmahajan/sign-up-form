import React from "react";
import { Button } from "antd";
import leftImg from "./images/left-img.svg";

const App = () => (
  <div className="h-screen w-full flex">
    <div className="h-full w-1/2 bg-black">
      <img
        className="grayscale h-full w-full object-cover"
        src={leftImg}
        alt="left-img"
      />
    </div>
    <div className="h-full w-1/2 flex justify-center bg-green-200">
      <div className="w-[626px]">
        <Button type="primary" shape="round" size="large">
          Login
        </Button>
      </div>
    </div>
  </div>
);

export default App;
