const express = require("express");
const Product = require("../models/Product");

const router = express.Router();


router.post("/create", async (req, res) => {
    try {
        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({
                message: "Name and price are required"
            });
        }

        const product = new Product({
            name,
            price
        });

        const savedProduct = await product.save();
        res.status(201).json({
            message: "Product created successfully",
            product: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
})

router.get("/", async (req, res) => {
    const products = await Product.find({});

    res.status(200).json({
        message: "Products fetched successfully",
        products
    });
})

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product fetched successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching product",
            error: error.message
        });
    }
})

router.put("/:id", async (req, res) => {

    try {

        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product updated successfully",
            product: updated
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }

})

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        res.status(200).json({
            message: "Product deleted successfully",
            product: deleted
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting product",
            error: err.message
        });
    }
});

module.exports = router;