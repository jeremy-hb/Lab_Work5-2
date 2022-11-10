function userForm() {
  let outputDiv = document.getElementById("output");
  var FirstName = document.getElementById("firstName").value;
  var LastName = document.getElementById("lastName").value;
  var EmailAddress = document.getElementById("emailAddress").value;
  var Address = document.getElementById("address").value;
  var City = document.getElementById("city").value;
  var Province = document.getElementById("province").value;
  var MemberShip = document.querySelector(
    'input[name="membership"]:checked'
  ).value;
  outputDiv.innerHTML =
    "FirstName" +
    "<br>" +
    LastName +
    "<br>" +
    EmailAddress +
    "<br>" +
    Address +
    "<br>" +
    City +
    "<br>" +
    Province +
    "<br>" +
    MemberShip;
}

var result = 0;

function myExcelFuns() {
  let outputDiv2 = document.getElementById("Output");
  var IWantCalculate = document.querySelector(
    'input[name="Numbers"]:checked'
  ).value;
  let numberStr = document.getElementById("numbers").value;

  if (numberStr == "") 
  {
    alert("Please, write some numbers seperated by spaces in the textbox.");
    return;
  }

  let numberArr = numberStr.trim().split(" ");

  let finalNumericArray = [];
  for (let i = 0; i < numberArr.length; i++) {
    let number = numberArr[i].trim();
    if (number != "")
      finalNumericArray.push(parseInt(number));
  }

  if (document.getElementById("autosum").checked) {
    let sum = 0;
      for (let number of finalNumericArray) {
        sum += number;
      }

      result = sum;

      outputDiv2.innerHTML =
        "<br>" + "Result : " + IWantCalculate + "; Sum:" + sum;
  } else if (document.getElementById("average").checked) {
    let sum1 = 0;
      for (let number of finalNumericArray) {
        sum1 += number;
      }

      let average = sum1 / finalNumericArray.length;

      result = average;

      outputDiv2.innerHTML =
        "<br>" + "Result : " + IWantCalculate + "; Average:" + average;
  } else if (document.getElementById("max").checked) {
    let max = finalNumericArray[0];

      for (let number of finalNumericArray) {
        if (max < number) max = number;
      }

      result = max;

      outputDiv2.innerHTML =
        "<br>" + "Result: " + IWantCalculate + "; Max: " + max;
  } else {
    let min = finalNumericArray[0];

      for (let number of finalNumericArray) {
        if (min > number) min = number;
      }

      result = min;

      outputDiv2.innerHTML =
        "<br>" + "Result: " + IWantCalculate + "; Min: " + min;
  }

  outputDiv2.innerHTML = "<br>Result: " + result;
}
