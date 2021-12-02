const LikedProduct = require("../models/LikedProduct");
const Product = require("../models/Product");
const { verifyTokenAuthorization } = require("./verifyToken");
const router = require("express").Router();

//ADD PRODUCT TO BAG
router.post("/", verifyTokenAuthorization, async (req, res) => {
  const newProduct = new LikedProduct(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL USER LIKED PRODUCTS
router.get("/:userId", verifyTokenAuthorization, async (req, res) => {
  const likedProducts = await LikedProduct.find({ userId: req.params.userId });
  let allProducts = [];
  await Promise.all(
    likedProducts.map(async (product) => {
      const productInfo = await Product.findById(product.productId);
      allProducts.push({ ...productInfo._doc });
    })
  );
  res.status(200).json(allProducts);
});

//UNLIKE PRODUCT
router.delete("/", verifyTokenAuthorization, async (req, res) => {
  await LikedProduct.findOneAndDelete({
    userId: req.body.userId,
    productId: req.body.productId,
  });
  res.status(200).json("Product removed from bag.");
});

module.exports = router;
