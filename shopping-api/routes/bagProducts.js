const BagProduct = require("../models/BagProduct");
const Product = require("../models/Product");
const { verifyTokenAuthorization } = require("./verifyToken");
const router = require("express").Router();

//ADD PRODUCT TO BAG
router.post("/", verifyTokenAuthorization, async (req, res) => {
  const newProduct = new BagProduct(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//MODIFY PRODUCT IN BAG
router.put(
  "/:userId/:productId",
  verifyTokenAuthorization,
  async (req, res) => {
    const updatedProduct = await BagProduct.findOneAndUpdate(
      { userId: req.params.userId, productId: req.params.productId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  }
);

//GET ALL USER PRODUCTS
router.get("/:userId", verifyTokenAuthorization, async (req, res) => {
  const bagProducts = await BagProduct.find({ userId: req.params.userId });
  let allProducts = [];
  await Promise.all(
    bagProducts.map(async (product) => {
      const productInfo = await Product.findById(product.productId);
      const quantity = product.quantity;
      const size = product.size;
      const color = product.color;
      const bagId = product._id;
      allProducts.push({ ...productInfo._doc, quantity, size, color, bagId });
    })
  );
  res.status(200).json(allProducts);
});

//REMOVE PRODUCT FROM BAG
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  await BagProduct.findByIdAndDelete(req.params.id);
  res.status(200).json("Product removed from bag.");
});

module.exports = router;
