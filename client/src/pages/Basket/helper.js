export const totalPorObj = (cart, key) => {
    return  cart.reduce((acc, el) => {
        return acc + el[key]
  }, 0);
};
