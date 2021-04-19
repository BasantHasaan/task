const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getProducts(categoryId, page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
 
    `SELECT products.*, MIN(product_providers.price) lowestPrice
     FROM products
     LEFT JOIN product_providers
     ON products.id = product_providers.products_id
     WHERE category_id = ?
     GROUP BY( products.id)  LIMIT ?,?`,
    [ categoryId, offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function update(id, products){
  const result = await db.query(
    `UPDATE products 
    SET featured = !featured
    WHERE id=?`, 
    [
      id
    ]
  );

  let message = 'Error in updating products';

  if (result.affectedRows) {
    message = 'Products updated successfully';
  }

  return {message};
}


module.exports = {
  getProducts,
  update
};
