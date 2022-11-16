// ====================================
// 1_1
// ====================================

const Sept2019 = new Date("September 2, 2019 09:00:00")
const nullDate = new Date(0)
const laterDate = new Date(31556908800)
const earlierDate = new Date(86400000)

let outputEl = document.querySelector("#ex1_1_output");
outputEl.innerHTML = Sept2019 + " = new Date('September 2, 2019 09:00:00')<br>" + nullDate + "= new Date(0)<br>" + laterDate + "= new Date (31556908800)<br>" + earlierDate + "= new Date(86400000)";

// ====================================
// 1_2
// ====================================

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let outputEl2 = document.querySelector("#ex1_2_output");

let today = new Date();
let thisYear = today.getFullYear();
let thisMonth = today.getMonth();
let thisDate = today.getDate();
let thisHour = today.getHours();
let thisMinute = today.getMinutes();
let thisSecond = today.getSeconds();
let thisPeriod = function getPeriod() {
    if (thisHour < 12) {
        return "AM";
    } else {
        return "PM";
    }
};
let thisWeekday = wochenTag[today.getDay()]
let thisMonthName = monate[today.getMonth()]
console.log(thisMonthName);
outputEl2.innerHTML = today + "<br>" + thisYear + "<br>" + thisMonth + " Month (November) <br>" + thisDate + " Day <br>" + thisHour + " Hour <br>" + thisMinute + " Minute <br>" + thisWeekday + "<br>" + thisMonthName;

let clockDisplay = [
    { label: "DAY", data: thisWeekday.slice(0, 3) },
    { label: "HOURS", data: thisHour },
    { label: "MINUTES", data: thisMinute },
    { label: "SECONDS", data: thisSecond },
    { label: "PERIOD", data: thisPeriod() }]
console.log(clockDisplay)

// ====================================
// 1_3
// ====================================
const outputEl31 = document.querySelector("#ex1_3_output1")
const outputEl32 = document.querySelector("#ex1_3_output2")
const outputEl33 = document.querySelector("#ex1_3_output3")
const outputEl34 = document.querySelector("#ex1_3_output4")
const outputEl35 = document.querySelector("#ex1_3_output5")

let date3 = new Date();
date3.setFullYear(date3.getFullYear() + 200);
outputEl31.innerHTML = date3;

date3 = new Date();
date3.setMonth((date3.getMonth()) + 6);
date3.setFullYear(date3.getFullYear() + 100);
outputEl32.innerHTML = date3;

date3.setMonth(date3.getMonth() + 1);
outputEl33.innerHTML = date3;

date3.setDate(date3.getDate() - 21);
outputEl34.innerHTML = date3;

date3 = new Date();
date3.setMonth(date3.getMonth() + 1)
outputEl35.innerHTML = date3;

// ====================================
// 1_5
// ====================================

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

function monthName(date) {
    let whateverDate = new Date(date)
    let writeDate = list[whateverDate.getMonth()]
    console.log(writeDate);
}
monthName()

console.log(monthName("2001,3,4")); //März
console.log(monthName("2019,12,24")); //Dezember
console.log(monthName("1410,07,15")); //Juli


// ====================================
// 1_6
// ====================================

let date5 = new Date(1999, 10, 5, 15)
let date6 = new Date();
let date7 = new Date(2019, 12, 3, 12)
let date8 = new Date(2000, 1, 1, 11)

function determPeriod(x) {
    let period = x.getHours() < 12 ? console.log("AM") : console.log("PM");
}
determPeriod(date5)
determPeriod(date6)
determPeriod(date7)
determPeriod(date8)

// ====================================
// 2_1
// ====================================

const outputEl2_1 = document.getElementById("ex2_1_output");

let date9 = new Date();
console.log(date9)
function reWriteDate() {
    let day9 = date9.getDate();
    let month9 = date9.getMonth();
    let year9 = date9.getFullYear();
    let dateDashes = `${day9}-${month9}-${year9}`
    let dateSlashes = `${day9}/${month9}/${year9}`
    outputEl2_1.innerHTML = month9 > 6 ? dateDashes : dateSlashes;
}
reWriteDate();

