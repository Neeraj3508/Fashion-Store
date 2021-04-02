if (getItemFromLocalStorage("numberOfItemsCart") == null) {
  console.log("value null");
  var numberOfItemsCart = 0;
  setItemInLocalStorage("numberOfItemsCart", numberOfItemsCart);
} else {
  var numberOfItemsCart = JSON.parse(
    getItemFromLocalStorage("numberOfItemsCart")
  );
}

if (getItemFromLocalStorage("products") === null) {
  var products = {};
} else {
  var products = JSON.parse(getItemFromLocalStorage("products"));
}
function makingProductObject(productName, productPrice) {
  if (productName in products) {
    products[productName] = {
      price: productPrice,
      quantity: ++products[productName]["quantity"],
    };
  } else {
    products[productName] = {
      price: productPrice,
      quantity: 1,
    };
  }
}

$(".add-cart").click((event) => {
  event.preventDefault();
  console.log("here");
  let parentElement = $(`#${event.target.id}`).parent();
  let productPrice = parentElement.children(".card-text").text();
  let productName = parentElement.children(".card-title").text();
  numberOfItemsCart = incrementItemsInCart(numberOfItemsCart);
  $("#cart-value").html(
    `${parseInt(localStorage.getItem("numberOfItemsCart")) + 1}`
  );
  makingProductObject(productName, productPrice);
  setItemInLocalStorage("products", JSON.stringify(products));
  setItemInLocalStorage("numberOfItemsCart", JSON.stringify(numberOfItemsCart));
});

function incrementItemsInCart(numberOfItemsCart) {
  return ++numberOfItemsCart;
}

function setItemInLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getItemFromLocalStorage(key) {
  return localStorage.getItem(key);
}
