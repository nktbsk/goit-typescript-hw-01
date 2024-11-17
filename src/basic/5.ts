//? Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek) => {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
        return true
    }
    return false

}
console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Tuesday));
console.log(isWeekend(DayOfWeek.Wednesday));
console.log(isWeekend(DayOfWeek.Thursday));
console.log(isWeekend(DayOfWeek.Friday));
console.log(isWeekend(DayOfWeek.Saturday));
console.log(isWeekend(DayOfWeek.Sunday));


// const isWeekend2 = (days: {}) => {
//     Object.values(days).forEach((day) => {
//         if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//             console.log(true);
//             return true
//         } 
//         console.log(false);
//         return false
//     })
// }

// console.log(isWeekend2(DayOfWeek));