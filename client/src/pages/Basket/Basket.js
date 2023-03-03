import React, { useContext, useState, useEffect, useParams } from "react";
import { fetchDevices, getAllDevices, getBasket } from "../../http/deviceApi";
import { Card, Row } from "react-bootstrap";
import { Button, ListGroup } from "react-bootstrap";
import { Context } from "../..";
import { check } from "../../http/userApi";
import DeviceItem from "../../components/DeviceItem";
import BasketItem from "../../components/BasketItem";
import "./index.css";
import { totalPorObj } from "./helper";

const Basket = () => {
  const { user, device } = useContext(Context);

  getBasket(user.userId).then((data) => device.setBasket(data));

  const duplicateIds = [];
  const parseAllDevices = Array.from(
    JSON.parse(JSON.stringify(device.allDevices))
  );
  const parseBasket = Array.from(JSON.parse(JSON.stringify(device.basket)));

  const basket2 = parseBasket
    .map(({ deviceId }) => {
      return parseAllDevices.find((d) => d.id === deviceId);
    })
    .map((e, i, a) => {
      if (a.filter((_, ind) => i !== ind).some((item) => item.id === e.id)) {
        duplicateIds.push(e.id);
        return e;
      } else return e;
    })
    .reduce((o, i) => {
      const dubl = duplicateIds.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});

      if (!o.find((v) => v.id === i.id)) {
        o.push(i);
        o.map((item) => {
          return {
            ...item,
            count: (item.count =
              dubl[item.id] === undefined ? 1 : dubl[item.id]),
          };
        });
      }
      return o;
    }, []);

  const [cart, setCart] = useState(basket2);

  const cart1 = cart.map((item) => {
    return {
      ...item,
      price: item.price * item.count,
    };
  });
  const increate = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: (product.count += 1),
          };
        }
        return product;
      });
    });
  };
  const decreate = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? (product.count -= 1) : 1,
          };
        }
        return product;
      });
    });
  };

  return (
    <div className="container">
      <div className="containerBasket">
        {cart1.map((device) => (
          <>
            <BasketItem
              key={device.id}
              device={device}
              increate={increate}
              decreate={decreate}
            />
            <hr />
          </>
        ))}

        <div className="total">
          <div className="helperTwo"></div>
          <div className="helper">
            <div className="totalNumber">{totalPorObj(cart1, "count")}</div>
            <div className="totalPrice">{totalPorObj(cart1, "price")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
