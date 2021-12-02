const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const cartsRoute = require("./routes/carts");
const bagProductsRoute = require("./routes/bagProducts");
const likedProductsRoute = require("./routes/likedProducts");

//ROUTES
const userRoute = require("./routes/users");

const app = express();
dotenv.config();

//CORS FOR FETCHING DATA
const cors = require("cors");
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartsRoute);
app.use("/api/bagProducts", bagProductsRoute);
app.use("/api/likedProducts", likedProductsRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running.");
});
