//Task 1

var a = "1";

if (a == "1") {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

//Task 2

var item = true;

if (item != true){
    console.log("Верно")
}
else{
    console.log("Неверно")
}

(item != true) ? console.log("Верно") : console.log("Неверно");

//Task 3

var a = 4;

if (a > 0 && a < 4) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

//Task 4

var a = 2;
var b = 10;

if (a > 3 && a < 12 || b >= 7 && b < 15) {
    console.log("Верно")
}
else {
    console.log("Неверно")
}

//Task 5

var month = 14;

if ((month >= 1 && month <= 2) || month == 12) {
    console.log("Зима")
}
else if (month >= 3 && month <=5) {
    console.log("Весна")
}
else if (month >= 6 && month <=8) {
    console.log("Лето")
}
else if (month >= 9 && month <=11) {
    console.log("Осень")
}
else {
    console.log("Неверное число")
}

// Task 6

var i;

for (var i = 2; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}