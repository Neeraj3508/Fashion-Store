let products = getItemFromLocalStorage("products");
let productsObject = JSON.parse(products);
fillTable();
addEventListener();
// productNameArray.forEach((product) => {
//   console.log(product);
// });
// productDetailsArray.forEach((details) => {
//   console.log(details);
// });
// console.log(productNameArray.length);

function getItemFromLocalStorage(key) {
  return localStorage.getItem(key);
}
function setItemInLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function fillTable() {
  let productNameArray = Object.keys(productsObject);
  let productDetailsArray = Object.values(productsObject);
//   console.log(productNameArray, productDetailsArray);
  let tableRefernceHTML = $("#cart-table");
  for (let i = 0; i < productNameArray.length; i++) {
    let element = `
    <tr class="product-details">
        <td>${productNameArray[i]}</td>
        <td>${productDetailsArray[i]["price"]}</td>
        <td class="text-center">${productDetailsArray[i]["quantity"]}</td>
        <td><button class="bg-danger btn text-light my-2 remove-button" id="${productNameArray[i]}">Remove</button></td>
    </tr>
    `;
    tableRefernceHTML.append(element);
  }
}

function addEventListener() {
    let productNameArray = Object.keys(productsObject);
    let productDetailsArray = Object.values(productsObject);
  $(".remove-button").click((event) => {
    // console.log("remove button clicked");
    event.preventDefault();
    //   console.log(productsObject)
    //   console.log(Object.keys(productsObject).length);
    //   console.log(event.target.id);
    //   console.log(event.target.id in productsObject)
    delete productsObject[event.target.id];
    setItemInLocalStorage("products", JSON.stringify(productsObject));
    let indexOfItemRemoved = $.inArray(event.target.id, productNameArray);
    let totalItemsInCart = parseInt(getItemFromLocalStorage("numberOfItemsCart"));
    let itemsToBeDeletedFromCart = productDetailsArray[indexOfItemRemoved].quantity;
    setItemInLocalStorage("numberOfItemsCart", totalItemsInCart - itemsToBeDeletedFromCart)
    $("tr").remove(".product-details");
    fillTable();
    addEventListener();
    //   console.log(productsObject)
    //   console.log(Object.keys(productsObject).length);
  });
}
