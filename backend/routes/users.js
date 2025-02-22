const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Tüm kullanıcıları getir GetAll()
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

// Id ye göre kategori getir GetById()
router.get("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

// Delete
router.delete("/:email", async (req, res) => {
    try {
        const email = req.params.email;
        const deletedUser = await User.findOneAndDelete({ email: email });
        if (!deletedUser) {
            return res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

// Güncelleme Update()
router.put("/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedInfo = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updatedInfo, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı..." });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası..." });
    }
});


module.exports = router;