function checkForCreditNumber() {
  let x = document.getElementById('creditNumberInput').value;
  let patt = /^[0-9]{12}$/;
  if(x.match(patt))
  document.getElementById('creditNumberOutput').innerHTML = "Valid";
  else
  document.getElementById('creditNumberOutput').innerHTML = "Not Valid"
}

function checkForSecurityNumber() {
  let x = document.getElementById('securityNumberInput').value;
  let patt = /^[0-9]{3}$/;
  if(x.match(patt)){
   document.getElementById('securityNumberOutput').innerHTML = "Valid";
  }
   else {
   document.getElementById('securityNumberOutput').innerHTML = "Not Valid";
  }

}

function checkForAccountHolderName() {
  let x = document.getElementById('accountHolderInput').value;
  let patt = /^[a-zA-Z]+/;
  if(x.match(patt)){
    document.getElementById('accountHolderOutput').innerHTML = "Valid";
  }
  else {
    document.getElementById('accountHolderOutput').innerHTML = "Not Valid";
  }
}