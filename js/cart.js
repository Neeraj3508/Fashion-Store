let products = getItemFromLocalStorage("products");
let productsObject = JSON.parse(products);
let productNameArray = Object.keys(productsObject);
productNameArray.forEach((product) => {
    console.log(product);
    console.log(productsObject[product])
})
console.log(Object.keys(productsObject))
console.log(productsObject)

function getItemFromLocalStorage(key) {
    return localStorage.getItem(key);
}