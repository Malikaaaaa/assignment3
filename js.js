function calculate() {
  var c1 = Number(document.getElementById("education").value);
  console.log(c1);
  var result = 500;
  result *= c1;

  var c2 = Number(document.getElementById("worth").value);
  result *= c2;

  var c3 = document.getElementsByClassName('skills');
  for (i = 0; i < 4; i++) {
    if (c3[i].checked === true) {
      result += parseFloat(c3[i].value);
    }
  }

  var c4 = document.forms.age;
  for (i = 0; i < c4.length; i++) {
    if (c4[i].checked) {
      result *= parseFloat(c4[i].value);
    }
  }

  var c5 = document.getElementsByClassName('reputation');
  console.log(c5);
  for (i = 0; i < 2; i++) {
    if (c5[i].checked === true) {
      result *= parseFloat(c5[i].value);
    }
  }
  if (c5[2].checked === true){
    result -= parseFloat(c5[2].value);
  }
  localStorage.setItem("result", result);
  return false;
}
