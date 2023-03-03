import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit = 2) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const getAllDevices = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};

export const createBasket = async (deviceId, basketId) => {
  const { data } = await $host.post("api/basket/append", {
    basketId,
    deviceId,
  });
  return data.basket;
};

export const getBasket = async (basketId) => {
  
  const { data } = await $host.get("api/basket/getOne", {
    params: { basketId },
  });
  
  // console.log(data);
  // document.cookie = JSON.stringify(data);
  // localStorage.setItem("basket", JSON.stringify(data));
  return data;
};
