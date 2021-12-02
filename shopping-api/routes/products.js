const Product = require("../models/Product");
const { verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");
const router = require("express").Router();

//POST PRODUCT
router.post("/", verifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedProduct = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const Category = req.query.category;
  const New = req.query.new;
  try {
    let products;
    if (New) {
      products = await Product.find().sort({ createdAt: -1 }).limit(10);
    } else if (Category) {
      products = await Product.find({
        categories: {
          $in: [Category],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {}
});

module.exports = router;
