let products = getItemFromLocalStorage("products");
let productsObject = JSON.parse(products);
let productNameArray = Object.keys(productsObject);
let productDetailsArray = Object.values(productsObject)
let tableRefernceHTML = $("#cart-table")
for(let i = 0; i < productNameArray.length; i++) {
    let element = `
    <tr>
        <td>${productNameArray[i]}</td>
        <td>${productDetailsArray[i]["price"]}</td>
        <td>${productDetailsArray[i]["quantity"]}</td>
    </tr>
    `
    tableRefernceHTML.append(element);
}
productNameArray.forEach((product) => {
    console.log(product);
})
productDetailsArray.forEach((details) => {
    console.log(details);
})
console.log(productNameArray.length)

function getItemFromLocalStorage(key) {
    return localStorage.getItem(key);
}