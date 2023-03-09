const Ttn = require("../ttn.model");

const addTtn = async (req, res, next) => {
  const { ttn } = req.body;
  const result = await Ttn.create({
    ttn,
  });
  res.status(201).json(result);
};

module.exports = {
  addTtn,
};
