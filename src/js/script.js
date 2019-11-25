'use strict';
let money, time;
function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses () {
    for (let i = 0; i < 1; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");    
}
detectDayBudget ();

function detectLevel () {
    if (appData.moneyPerDay <= 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt ("Какова сумма накопления"),
            percent = +prompt("Под какой процент");

            appData.mobthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита " + appData.mobthIncome);
    }
}

checkSavings();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
    let questionOptExpenses = prompt ("Введите статью необязятельных расходов ");
        appData.optionalExpenses[i] = questionOptExpenses;
    console.log(appData.optionalExpenses);
    
    }
}
chooseOptExpenses();



let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bools = true;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bools;

console.log(options);

for (let key in options) {
    console.log('свойство ' + key + ' имеет значение ' + options[key]);

}


console.log(Object.keys(options).length);

//************************************************************ */

// let arr = [1,2,3,4,5];
// console.log(arr);

// arr.pop(); //удаляет последний элемент массива
// arr.push("5"); // Добавляет элемент в конец массива
// arr.shift(); // удаляет первый элемент массива
// arr.unshift("first"); // добавляет первый элемень массива


// // for (let i = 0 ; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// arr.forEach(function(item, i, mass) {
//     console.log (i+ ': ' + item + ' (массив: ' + mass + ')');
// });

// let mass = [1,3,4,6,7] ;
//      // выводит ключи массива
//     for(let key in mass) { 
//         console.log(key);
//     }
//     // выводит значения массива
//     for(let key of mass) {
//         console.log(key);
//     }


//************************************************************** */
// // загружает в массив все что ввел пользователь, запятая является разделителем 
// //элементов массива

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');


//  переделывает массив в строку с заданным разделителем
// let arr = ['asdfasdf', 'asdffvd', ' dfghdfg' , 'dfghsd'],
//     i = arr.join(', ');

// console.log (i);

// сортировка массива по строкам числа не сортирует
// let arr = ['asdfaf', 'bdff', 'dfghdfg' , 'cfghsd'],
//     i = arr.sort();

// console.log (arr);

let arr = [1, 15, 5],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log (arr);





// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);