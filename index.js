//! Start by creating the variables for the data recorded
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const temps = ["32F", "25C","70F", "18C","80F", "15C","72F", "28C","68F", "20C","75F", "23C","82F", "30C","65F", "22C","77F", "26C","78F", "24C","73F", "21C","79F", "27C","71F", "19C","74F", "17C","76F", "29C"]

function Fahrenheittocelcius(f){
    return (f - 32) * 5 / 9
}
function CelsiustoFahrenheit(c){
     return(c * 9 / 5) + 32
}
const tempsInCelsius = temps.map(tempString => {

    const unit = tempString.slice(-1).toUpperCase();
    const value = parseFloat(tempString);
    if (unit === "F") {
   
    return Fahrenheittocelcius(value);
  } else if (unit === "C") {
   
    return value;
  } else {
   
    console.log(`Unexpected unit found: ${unit}. Assuming Celsius.`);
    return value;
  }
});

console.log(tempsInCelsius)

//! Start the calculation of the total temperatures
const numberOfDays = temps.length;

//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const tot_temperature_in_celsius = tempsInCelsius.reduce((sum, currentTemp) => {
    return sum + currentTemp;
}, 0);

const tot_temperature_in_fahrenheit = tempsInCelsius.reduce((sum, currentTemp) => {
    return sum + CelsiustoFahrenheit(currentTemp);
}, 0);

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

// 1. Calculate the averages
const avg_temperature_in_celsius = tot_temperature_in_celsius / numberOfDays;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / numberOfDays;

console.log(`Total Temperature (Celsius): ${tot_temperature_in_celsius.toFixed(2)}°C`);
console.log(`Average Temperature (Celsius): ${avg_temperature_in_celsius.toFixed(2)}°C`);
console.log(`Total Temperature (Fahrenheit): ${tot_temperature_in_fahrenheit.toFixed(2)}°F`);
console.log(`Average Temperature (Fahrenheit): ${avg_temperature_in_fahrenheit.toFixed(2)}°F`);

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
}