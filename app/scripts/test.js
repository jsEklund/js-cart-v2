
var shoppingCart = new Cart();

shoppingCart.addProduct(1, "white T-shirt", 1);
shoppingCart.addProduct(2, "red T-shirt", 10);

shoppingCart.addProductCount(2, 10);
shoppingCart.addProductCount(1, 10);

// shoppingCart.removeProductCount(2, 5);
// shoppingCart.removeProductCount(1, 6);
// shoppingCart.removeProductCount(1, 5);

shoppingCart.deleteProduct(1);

debugger;