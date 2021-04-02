let numberOfItemsCart = 0;
let products = {};
$(".card-women").click((event) => {
  let parentElement = $(`#${event.target.id}`).parent();
  let productPrice = parentElement.children(".card-text").text();
  let productName = parentElement.children(".card-title").text();
  numberOfItemsCart = incrementItemsInCart(numberOfItemsCart);
  makingProductObject(productName);
  setItemInLocalStorage("products", JSON.stringify(products));
  setItemInLocalStorage("numberOfItemsCart", JSON.stringify(numberOfItemsCart));
  const hasProduct = ifProductExists(productName, productPrice);
  if (hasProduct) {
    console.log("true");
  } else {
    console.log("false");
  }
});

function makingProductObject(productName, productPrice) {
  if (productName in products) {
    products[productName]["quantity"] += 1;
  } else {
    products[productName] = { price: productPrice, quantity: 1 };
  }
}

function incrementItemsInCart(numberOfItemsCart) {
  return ++numberOfItemsCart;
}

function ifProductExists(productName) {
  const products = JSON.parse(getItemFromLocalStorage("products"));
  const hasProduct = productName in products;
  if (hasProduct) {
    return true;
  } else {
    return false;
  }
}

function setItemInLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getItemFromLocalStorage(key) {
  return localStorage.getItem(key);
}
