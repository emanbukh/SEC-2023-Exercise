let weightDOM = document.querySelector("#weight");
let heightDOM = document.querySelector("#height");
let buttonDOM = document.querySelector("#calculateBtn");
let resultDOM = document.querySelector("#bmiAdvice");

buttonDOM.addEventListener("click", function (event) {
  event.preventDefault();
  const weight = weightDOM.value;
  const height = heightDOM.value;
  let weight_status = false,
    height_status = false;
  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerText =
      "Please enter a valid value for weight!";
  } else {
    document.getElementById("weight_error").innerText = "";
    weight_status = true;
  }
  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerText =
      "Please enter a valid value for height!";
  } else {
    document.getElementById("height_error").innerText = "";
    height_status = true;
  }
  if (weight_status && height_status) {
    const bmi = (weight / (height * height)).toFixed(2);
    if (bmi < 18) {
      resultDOM.innerText =
        "Underweight: " +
        bmi +
        " " +
        "You need to eat more or consult a doctor";
    } else if (bmi >= 18 && bmi <= 24) {
      resultDOM.innerText =
        "Ideal: " + bmi + " " + "Good job for taking care of your health";
    } else {
      resultDOM.innerText = "Overweight: " + bmi + " " + "You need to exercise";
    }
  } else {
    alert("Please put correct input");
    resultDOM.innerText = "";
  }
});
console.log(bmiAdvice);
// <!-- bmi =  weight(kg) / height (m) / height (m) -->
//         <!-- >25 = overweight, 18 - 24 = ideal, <18 underweight -->
//         <!-- Overweight : You need to exercise -->
//         <!-- Ideal : Good job for taking care of your health -->
//         <!-- Underweight : You need to eat more or consult a doctor -->
