import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";
import { Context } from "./";
import { check } from "./http/userApi";
import { getBasket, getAllDevices } from "./http/deviceApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user, device } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // console.log(user.isAuth);
  // console.log(user.userId);
  // console.log(user.role);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          if (data.token) {
            user.setIsAuth(true);
            user.setUser(true);
            user.setRole(data.role);
          }
        })
        .finally(() => setLoading(false));
    }, 700);
  }, []);

  useEffect(() => {
    getAllDevices().then((data) => device.setAllDevices(data.rows));
    getBasket(user.userId).then((data) => device.setBasket(data));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
