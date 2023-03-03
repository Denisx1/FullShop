import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { getAllDevices, getBasket } from "../http/deviceApi";

const NavBar = observer(() => {
  const { user, device } = useContext(Context);
  const history = useHistory();

  const basket = () => {
    history.push(BASKET_ROUTE);
  };

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);

    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    history.push(LOGIN_ROUTE);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Buy Device
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            {user.role === "ADMIN" ? (
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
            ) : (
              ""
            )}

            <Button variant={"outline-light"} onClick={() => basket()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Button>

            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
