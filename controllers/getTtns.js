const Ttn = require("../ttn.model");

const getTtns = async (req, res, next) => {
  const result = await Ttn.find();
  res.json(result);
};

module.exports = {
  getTtns,
};
