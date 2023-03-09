const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = require("./app");

const { MONGO_CONNECTION_STRING: mongoConnectionString, PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

mongoose
  .connect(mongoConnectionString)
  .then(() => console.log("Database connection successful"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
