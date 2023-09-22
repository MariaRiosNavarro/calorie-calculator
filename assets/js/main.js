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

// 2 Create Function

const calculateData = () => {
  // 3 Save Values

  let height = Number(heightInput.value); //number
  let age = Number(ageInput.value); //number
  let weight = Number(weightInput.value); //number
  let selection = selectInput.value; //string
  let female = femaleInput.checked; //true default
  let male = maleInput.checked; //false default

  // * GENERAL FORMULA (women & men)

  //   female vs male

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

  //console.log({ a, b, c, d });

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

  //console.log(pal);

  // General Formula (female + male):
  //   Transform to KJ -> 1 kcal = 4,184 KJ

  // -basal Metabolic kcal and KJ

  const calToKJ = (cal) => cal * 4.18;

  const basalMetabolicCalculate = (a, b, c, d) =>
    a + b * weight + c * height + d * age;

  let basalMetabolicKcal = basalMetabolicCalculate();

  console.log({ basalMetabolicKcal });

  //   KJ Output

  let basalMetabolicKJ = calToKJ(basalMetabolicKcal);

  // - TOTAL basal Metabolic kcal and KJ (with Pal)

  const totalMetabolicRateCalculate = (num) => num * pal;

  let totalKcal = totalMetabolicRateCalculate(basalMetabolicKcal);
  let totalKJ = totalMetabolicRateCalculate(basalMetabolicKJ);

  console.log({ totalKcal, totalKJ });

  outputBMKcal.innerHTML = basalMetabolicKcal;
  outputBMKJ.innerHTML = basalMetabolicKJ;
  outputTotalKcal.innerHTML = totalKcal;
  outputTotalKJ.innerHTML = totalKJ;

  // TEST DATA female:
  //
  // 655.1 + (9.6 * 63) + (1.8 * 168) – (4.7 * 44). PLUS PAL (1.2) = 1626.6.
};
