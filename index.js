// let a = 80;
// let b = 170;
// let c = b * 0.01;
// let d = c * c;
// let result = a / d;

// const bmi_calc = () => {
//   if (result <= 18) {
//     return result, "Underweight";
//   }
//   if (result >= 18 && result <= 25) {
//     return result, "Normal";
//   }
//   if (result >= 25 && result <= 30) {
//     return result, "Overweight";
//   }
// };

// console.log(bmi_calc());
// console.log(parseFloat(result).toFixed(2));

function bmi_calc() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var cm_m = height * 0.01;
  var square = cm_m * cm_m;
  var result = weight / square;
  document.getElementById("bmi_span").innerHTML = result.toFixed(2);
  if (result <= 18) {
    document.getElementById("bmi_word").innerHTML = "UnderWeight";
  }
  if (result >= 18 && result <= 25) {
    document.getElementById("bmi_word").innerHTML = "Normal";
  }
  if (result >= 25 && result <= 30) {
    document.getElementById("bmi_word").innerHTML = "OverWeight";
  }
}
