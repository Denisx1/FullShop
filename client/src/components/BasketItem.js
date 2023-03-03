import React, { useState } from "react";
import star from "../assets/star.png";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import "./index.css";
import Count from "./Count/Count";
import DeviceItem from "./DeviceItem";

const BasketItem = ({ device, increate, decreate }) => {
  return (
    //

    <div className="product">
      <div className="photo">
        <img
          width={100}
          height={100}
          src={process.env.REACT_APP_API_URL + "/" + device.img}
        />
      </div>
      <div className="info">
        <div>{device.name}</div>
        <div>
          {device.rating}
          <img width={20} height={20} src={star} />
          <Image width={18} height={18} src={star} />
        </div>
      </div>
      <div className="iterible">
        <Count device={device} increate={increate} decreate={decreate} />
      </div>
      <div className="price">{device.price}</div>
    </div>
  );
};
export default BasketItem;
