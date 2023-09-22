// 1. Save Variables (Inputs & Outputs)

const heightInput = document.querySelector('[data-js="heightCM"]');
const ageInput = document.querySelector('[data-js="ageYears"]');
const weightInput = document.querySelector('[data-js="weightKg"]');
const femaleInput = document.querySelector('[data-js="female"]');
const maleInput = document.querySelector('[data-js="male"]');
const selectInput = document.querySelector('[data-js="select"]');

const outputBMKcal = document.querySelector('[data-js="bm-rate-kcal"]');
const outputBMKJ = document.querySelector('[data-js="bm-rate-KJ"]');
const outputTotalKcal = document.querySelector('[data-js="total-rate-kcal"]');
const outputTotalKJ = document.querySelector('[data-js="total-rate-KJ"]');

const outputTable = document.querySelector('[data-js="table"]');
const alert = document.querySelector('[data-js="alert"]');

// 2 Create Function

const calculateData = () => {
  // remove alert if exist

  alert.innerHTML = "";

  // 3 Save Values

  let height = Number(heightInput.value); //number
  let age = Number(ageInput.value); //number
  let weight = Number(weightInput.value); //number
  let selection = selectInput.value; //string
  let female = femaleInput.checked; //true default

  // error handling

  //   const numberRegex = /^[\d,.]+$/;

  if (height === 0 || age === 0 || weight === 0) {
    alert.innerHTML = `<p class="alert">Bitte, geben Sie ein gültige Wert<p>`;
    return;
  }

  //   female vs male

  let a, b, c, d;

  if (female === true) {
    a = 655.1;
    b = 9.6;
    c = 1.8;
    d = 4.7;
  } else {
    a = 66.47;
    b = 13.7;
    c = 5;
    d = 6.8;
  }

  // activity Pal selection

  let pal = 0.95;

  if (selection === "almost-no-activity") {
    pal = 0.95;
  } else if (selection === "very-little") {
    pal = 1.2;
  } else if (selection === "little") {
    pal = 1.5;
  } else if (selection === "medium") {
    pal = 1.7;
  } else if (selection === "hard") {
    pal = 1.9;
  } else if (selection === "hard") {
    pal = 2.2;
  } else {
    pal = 0.95;
  }

  // * GENERAL FORMULA (female & male)

  //- Transform to KJ -> 1 kcal = 4,184 KJ

  const basalMetabolicCalculate = (i, x, y, z) => {
    let firstvalue = x * weight;
    let secondvalue = y * height;
    let thirdvalue = z * age;
    let result = i + firstvalue + secondvalue - thirdvalue;
    return result;
  };

  // -basal Metabolic kcal and KJ //only round in output

  let basalMetabolicKcal = basalMetabolicCalculate(a, b, c, d);

  let bmKcalOutput = basalMetabolicKcal.toFixed(1); //Round only for the Output

  let basalMetabolicKJ = basalMetabolicKcal * 4.18;

  let bmKJOutput = basalMetabolicKJ.toFixed(1);

  // - TOTAL basal Metabolic kcal and KJ (with Pal) //only round in output

  const totalMetabolicRateCalculate = (num) => num * pal;

  //   round with .toFixed(2)

  let totalKcal = totalMetabolicRateCalculate(basalMetabolicKcal).toFixed(1);
  let totalKJ = totalMetabolicRateCalculate(basalMetabolicKJ).toFixed(1);

  console.log({ totalKcal, totalKJ });

  outputBMKcal.innerHTML = bmKcalOutput;
  outputBMKJ.innerHTML = bmKJOutput;
  outputTotalKcal.innerHTML = totalKcal;
  outputTotalKJ.innerHTML = totalKJ;

  // -TEST DATA 'female' & 'selection =very-little'(1.2):
  // -weight=63, height=168, age =44
  //
  // -bmKcalOutput = 655.1 + (9.6 * 63) + (1.8 * 168) – (4.7 * 44)= 1355,5
  // -totalKcal(1.2) = 1626.6.

  //   Visibility of the table

  outputTable.classList.toggle("block");
};
