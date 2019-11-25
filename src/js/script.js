'use strict';
// let money,
//     time;


//     money = prompt('Ваш бюджет на месяц? :');
//     time = prompt('Введите дату в формате YYYY-MM-DD :');
   
//     let appData = {
//         budget: money,
//         expenses: {},
//         income: [],
//         timeData: time,
//         saving: false

//     };

//     console.log(appData.timeData); 
//     let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// alert(appData.budget / 30);

let num = 50;
if (num == 49) {
    console.log("TRUE");
} else if (num == 57) {
    console.log("1111ALSE");
} else {
    console.log("FALSE");    
}


(num == 50) ? console.log("333TRUE") : console.log("333False");

switch(num) {
    case num <49 :
        console.log("TRUE");
        break;
    case num > 100 :
        console.log("Mnogo");
        break;
    case num > 80 :
        console.log("Mnogo");
        break;
    case 50 :
        console.log("Verno");
        break;
    default:
        console.log("All is break");
        break;
}