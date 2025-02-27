const express = require("express");
const router = express.Router();

//Rotaları alıyoruz.
const categoryRoute = require("./categories");
const productRoute = require("./products");
const userRoute = require("./users");
const authRoute = require("./auth");
const couponRoute = require("./coupons")

//Rotaların yollarını tanımlıyoruz.
router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);

module.exports = router;