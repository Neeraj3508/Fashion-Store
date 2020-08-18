//details

function giveName() {
  let x = document.getElementById("fname").value;
  localStorage.setItem("nameUser",x);
}
var text = "";
var count = 1;
function giveAddress(id) {
  if(count < 4) {
  text += document.getElementById(id).value + "," ;
  count++;
  }
  else{
    text+= document.getElementById(id).value;
  }
  localStorage.setItem("fullAdress",text);
}

function getMobileNumber() {
  let x = document.getElementById('mainMobileNumber').value;
  localStorage.setItem("mainMobileNumber",x);
}

function checkForName() {
  let x = document.getElementById('fname').value;
  let patt = /^[a-zA-Z]+\s{1}[a-zA-Z]+$/;
  if(x.match(patt))
  document.getElementById('detailsOutputName').innerHTML = "Valid";
  else
  document.getElementById('detailsOutputName').innerHTML = "Not Valid";
}
function checkForMobileNumber() {
  let x = document.getElementById('mainMobileNumber').value;
  let patt = /^[0-9]{5}[-]*?[0-9]{5}/;
  if(x.match(patt))
  document.getElementById('detailsOutputNumber').innerHTML = "Valid";
  else
  document.getElementById('detailsOutputNumber').innerHTML = "Not Valid";
}



//Price and quantity
let costToBePaid = localStorage.getItem("totalCost");
costToBePaid = JSON.parse(costToBePaid);
console.log(costToBePaid);
console.log(typeof costToBePaid);

let productsQuantity = localStorage.getItem("cartNumbers");
productsQuantity = JSON.parse(productsQuantity);
console.log(productsQuantity);
console.log(typeof productsQuantity);
document.getElementById("orderPrice").innerHTML = "Rs." + costToBePaid;
document.getElementById("orderQuantity").innerHTML = productsQuantity;

let nameUser = localStorage.getItem("nameUser");
document.getElementById("orderName").innerHTML = nameUser; 

let userAddress = localStorage.getItem("fullAdress");
document.getElementById('orderAddress').innerHTML = userAddress;

let userMainMobileNumber = localStorage.getItem('mainMobileNumber');
document.getElementById('orderMobileNumber').innerHTML = userMainMobileNumber;