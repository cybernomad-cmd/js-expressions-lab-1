// Step 1: Define temperatures
const temps = [
  { value: 32, unit: "F" },
  { value: 25, unit: "C" },
  { value: 70, unit: "F" },
  { value: 18, unit: "C" },
  { value: 80, unit: "F" },
  { value: 15, unit: "C" },
  { value: 72, unit: "F" },
  { value: 28, unit: "C" },
  { value: 68, unit: "F" },
  { value: 20, unit: "C" },
  { value: 75, unit: "F" },
  { value: 23, unit: "C" },
  { value: 82, unit: "F" },
  { value: 30, unit: "C" },
  { value: 65, unit: "F" },
  { value: 22, unit: "C" },
  { value: 77, unit: "F" },
  { value: 26, unit: "C" },
  { value: 78, unit: "F" },
  { value: 24, unit: "C" },
  { value: 73, unit: "F" },
  { value: 21, unit: "C" },
  { value: 79, unit: "F" },
  { value: 27, unit: "C" },
  { value: 71, unit: "F" },
  { value: 19, unit: "C" },
  { value: 74, unit: "F" },
  { value: 17, unit: "C" },
  { value: 76, unit: "F" },
  { value: 29, unit: "C" },
];

let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

for (let i = 0; i < temps.length; i++) {
  let temp = temps[i];

  let tempF;
  let tempC;

  if (temp.unit === "F") {
    tempF = temp.value;
    tempC = (temp.value - 32) * 5 / 9;
  } else {
    tempC = temp.value;
    tempF = (temp.value * 9 / 5) + 32;
  }

  tot_temperature_in_fahrenheit += tempF;
  tot_temperature_in_celsius += tempC;
}

const avg_temperature_in_fahrenheit =
  tot_temperature_in_fahrenheit / temps.length;

const avg_temperature_in_celsius =
  tot_temperature_in_celsius / temps.length;

console.log("Total F:", tot_temperature_in_fahrenheit);
console.log("Total C:", tot_temperature_in_celsius);
console.log("Average F:", avg_temperature_in_fahrenheit);
console.log("Average C:", avg_temperature_in_celsius);

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius,
};
