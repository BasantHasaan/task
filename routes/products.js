const express = require("express");
const router = express.Router();
const Products = require("../services/products");

/* GET products. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await Products.getProducts(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

module.exports = router;
