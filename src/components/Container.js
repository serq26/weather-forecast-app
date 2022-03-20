import React from "react";
import { useBackground } from "../contexts/BackgroundContext";
import Dropdown from "./Dropdown";
import Weather from "./Weather";

export default function Container() {
  const { background } = useBackground();
  console.log(background);
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(../images/${background}.jpg)`,backgroundRepeat: "no-repeat",backgroundSize:"cover" }}
    >
      <Dropdown />
      <Weather />
    </div>
  );
}
