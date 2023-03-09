const Ttn = require("../ttn.model");

const removeTtns = async (req, res, next) => {
  const result = await Ttn.deleteMany({});
  res.json(result);
};

module.exports = {
  removeTtns,
};
