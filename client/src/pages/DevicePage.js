import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useParams } from "react-router-dom";
import {
  fetchOneDevice,
  createBasket,
  getBasket,
  fetchDevices,
  getAllDevices,
} from "../http/deviceApi";
import { check, checkId } from "../http/userApi";
import { Context } from "..";
import { useHistory } from "react-router-dom";

const DevicePage = () => {
  const { user, device } = useContext(Context);
  const [devices, setDevices] = useState({ info: [] });
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(parseInt(id)).then((data) => setDevices(data));
  }, []);

  const handlerBasket = (item) => {
    createBasket(parseInt(id), user.userId);
    getBasket(user.userId).then((data) => device.setBasket(data));
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + "/" + devices.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{devices.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {devices.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {devices.price} грн</h3>
            <Button
              variant={"outline-dark"}
              onClick={() => handlerBasket(devices)}
            >
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {devices.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
