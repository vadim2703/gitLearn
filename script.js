var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

console.log(money);
console.log(time);

var a = prompt("Введите обязательную статью расходов в этом месяце");
var b = prompt("Во сколько обойдется?");

let expenses = {
    a,
    b
};

console.log("expenses: {" + a + " : " + b + "}");

let optionalExpenses = {};
let income = {};
var savings = false;

let appData = {
    money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    savings
};

alert("бюджет на один день: " + Number(money)/30);


