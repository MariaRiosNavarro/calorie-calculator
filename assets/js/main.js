const physicalStrainPAL = {
  0.95: "Schlafen",
  1.2: "Nur Sitzen oder Liegen",
  1.5: "Ausschließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit",
  1.7: "Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende, Fließbandarbeiter, Laboranten, Kraftfahrer",
  1.9: "Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen",
  2.2: "Körperlich anstrengende berufliche Arbeit",
};

// Steps

// Calculate 1st basal metabolic rate. Harris Benedict formula:

// * basal metabolic rate for women (calories per day)

// 655.1 +
// (9.6 * body weight in kg) +
// (1.8 * height in cm) -
// (4.7 * age in years) = basal metabolic rate

// * Basal metabolic rate for men(calories per day)

// 66.47 +
// (13.7 * body weight in kg) +
// (5 * height in cm) -
// (6.8 * age in years) = basal metabolic rate

// * GENERAL FORMULA (women & men)

let bodyWeightKg = 0;
let heightCM = 0;
let ageYears = 0;

let a, b, c, d;

const basalMetabolicCalculate = (a, b, c, d) =>
  a + b * bodyWeightKg + c * heightCM + d * ageYears;

let basalMetabolicOutput = basalMetabolicCalculate();

// *total metabolic rate to be calculated:
// PAL factor (PAL=Physical Activity Level) *
// basal metabolic rate can be multiplied.

const totalMetabolicRateCalculate = () =>
  basalMetabolicOutput * physicalStrainPAL;
