import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
  });

  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth")
  localStorage.setItem('id', data.id)
  localStorage.setItem("token", data.token);
  localStorage.setItem('role', data.role)
  return (jwt_decode(data.token), data);
};

// export const checkId = async () =>{
//   const {data} = await $authHost.get('api/user/check')
//   localStorage.setItem('id',JSON.stringify(data.id))
//   return data.id
// }
