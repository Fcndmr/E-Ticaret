const express = require("express");
const router = express.Router();
const Product = require("../models/Product")

//Create()
router.post("/",  async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."})
    }
});

//GetAll()
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

//GetById()
router.get("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({error : "Ürün bulunamadı..."});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error : "Sunucu hatası..."});
    }
});

//Update()
router.put("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const updatedInfo = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({error : "Ürün bulunamadı..."});
        }
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedInfo, {new: true, runValidators: true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

//Delete()
router.delete("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Ürün bulunamadı..." });
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası..." });
    }
});


module.exports = router; 
