const express = require("express");
const router = express.Router();

//Rotaları alıyoruz.
const categoryRoute = require("./categories");
const productRoute = require("./products");
const userRoute = require("./users");
const authRoute = require("./auth");

//Rotaların yollarını tanımlıyoruz.
router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);

module.exports = router;