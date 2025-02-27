const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon");

//Create()
router.post("/",  async (req, res) => {
    try {
        const coupon = new Coupon(req.body);
        await coupon.save();
        res.status(201).json(coupon);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."})
    }
});

//GetAll()
router.get("/", async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

//GetById()
router.get("/:couponId", async (req, res) => {
    try {
        const couponId = req.params.couponId;
        const coupon = await Coupon.findById(couponId);
        if (!coupon) {
            return res.status(404).json({ error: "Kupon bulunamadı..." });
        }
        res.status(200).json(coupon);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Update()
router.put("/:couponId", async (req, res) => {
    try {
        const couponId = req.params.couponId;
        const updatedInfo = req.body;
        const coupon = await Coupon.findById(couponId);
        if (!coupon) {
            return res.status(404).json({ error: "Kupon bulunamadı..." });
        }
        const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updatedInfo, { new: true, runValidators: true });
        res.status(200).json(updatedCoupon);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası..." });
    }
});

//Delete()
router.delete("/:couponId", async (req, res) => {
    try {
        const couponId = req.params.couponId;
        const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
        if (!deletedCoupon) {
            return res.status(404).json({ error: "Kupon bulunamadı..." });
        }
        res.status(200).json(deletedCoupon);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası..." });
    }
});

module.exports = router;



