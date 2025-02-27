const express = require("express");
const Category = require("../models/Category");
const router = express.Router();


//Tüm kategorileri getir GetAll()
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

//Id ye göre kategori getir GetById()
router.get("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        try {
            const category = await Category.findById(categoryId);
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({error : "Kategori bulunamadı..."});
        }
    } catch (error) {
        res.status(500).json({ error : "Sunucu hatası..."});
    }
});

//Yeni kategori ekle Create()
router.post("/", async (req, res) => {
    try {
        const {name, img} = req.body;
        const newCategory = new Category({name, img});
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."})
    }
});

//Güncelleme Update();
router.put("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const updatedInfo = req.body;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({error : "Kategori bulunamadı..."});
        }
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updatedInfo, {new: true, runValidators: true});
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

// Kategori silme Delete()
router.delete("/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ error: "Kategori bulunamadı..." });
        }
        res.status(200).json({ message: "Kategori başarıyla silindi." });
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası..." });
    }
});

module.exports = router;
