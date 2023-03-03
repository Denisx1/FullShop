const { BasketDevice } = require("../model/models");
const ApiError = require("../error/apiError");

class BasketController {
  async append(req, res) {
    const { basketId, deviceId } = req.body;
    const basket = await BasketDevice.create({
      deviceId,
      basketId,
    });
    return res.json({ basket });
  }
  async getOne(req, res) {
    const { basketId } = req.query;
    const basket = await BasketDevice.findAll({ where: { basketId } });
    return res.json(basket);
  }
}
module.exports = new BasketController();
