//     Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
//     які спортсмен споживав протягом тижня.Функція очікує один параметр: days — масив об’єктів.
//     Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.

console.log("===== task 2 =====");

function calcAverageCalories(days) {
  const arrayCalories = [];
  //   console.log(arrayCalories);

  for (const item of days) {
    arrayCalories.push(item.calories);
  }
  //   console.log(arrayCalories);

  let sum = 0;

  for (const item of arrayCalories) {
    sum += item;
  }
  //   console.log("sum -", sum);
  //   console.log("length - ", arrayCalories.length);

  if (arrayCalories.length === 0) {
    return 0;
  }

  return sum / arrayCalories.length;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
console.log("==================");