import React, { useContext, useState } from "react";
import { Context } from "../..";
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import "./index.css";

const Count = ({ device, increate, decreate }) => {
  return (
    <>
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          value={device.count}
        ></input>
      </div>
      <div className="count__controls">
        <button
          type="button"
          className="count__up"
          onClick={() => {
            increate(device.id);
          }}
        >
          <img width={10} src={up} />
        </button>
        <button
          type="button"
          className="count__down"
          onClick={() => {
            decreate(device.id);
          }}
        >
          <img width={10} src={down} />
        </button>
      </div>
    </>
  );
};
export default Count;
