const { verifyToken, verifyTokenAuthorization } = require("./verifyToken");
const Cart = require("../models/Cart");

const router = require("express").Router();

//CREATE CART
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//ADD PRODUCT TO CART
router.put("/add/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $push: { products: req.body },
    });
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE PRODUCT IN CART
router.put(
  "/update/:id/:productId",
  verifyTokenAuthorization,
  async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      const product = cart.products.filter((product) => {
        return product._id === req.params.productId;
      });
      // const updatedProduct = await product.update
      const updatedCart = await product.update()
      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

//GET CART
router.get("/find/:userId", verifyTokenAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET

module.exports = router;
