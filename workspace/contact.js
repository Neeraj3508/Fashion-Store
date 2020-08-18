function checkForFullName() {
  let x = document.getElementById('inputName').value;
  let patt = /^[a-zA-Z]+\s{1}[a-zA-Z]+$/;
  if(x.match(patt))
  document.getElementById('outputName').innerHTML = "Valid";
  else
  document.getElementById('outputName').innerHTML = "Not Valid";
}
function checkForMobileNumber() {
  let x = document.getElementById('inputNumber').value;
  let patt = /^[0-9]{5}[-]*?[0-9]{5}/;
  if(x.match(patt))
  document.getElementById('outputNumber').innerHTML = "Valid Mobile Number";
  else
  document.getElementById('outputNumber').innerHTML = "Not Valid";
}
function checkForEmail() {
  let x = document.getElementById('inputEmail').value;
  let patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(x.match(patt))
  document.getElementById('outputEmail').innerHTML = "Valid Email Address";
  else
  document.getElementById('outputEmail').innerHTML = "Valid";
}