function checkForEmptyField() {
  let input = document.getElementById('nameInput').value;
  if(input.length === 0)
  document.getElementById('emptyFieldOrNot').innerHTML = "Field is Empty";
}

function checkForAge() {
  let x = document.getElementById('ageInput').value;
  let patt = /^[0-9]+$/;
  if(x.match(patt))
  document.getElementById('ageIsNumber').innerHTML = "ok";
  else
  document.getElementById('ageIsNumber').innerHTML = "age should contain numbers only"
}

function checkEmail() {
  let x = document.getElementById('emailInput').value;
  let patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(x.match(patt))
    document.getElementById('emailValid').innerHTML = "valid";
    else
    document.getElementById('emailValid').innerHTML = "not Valid";
}