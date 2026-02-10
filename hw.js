
// с клавитауры вводится слово вывести резальтат в консоль сколько символов
let slovo = prompt("введите слово:")
let result = slovo.length;
console.log(result)

// с клавиатуры вводится слово программа должна проверить есть ли буква к в этом слова iclude(a)
// решить эту задачу с приминением тернаного оператора 
 
let slovo = prompt("введите слово:")
let res = slovo.includes("K")
let resultat = (res === true)?"в слове есть к":"в слове нет к"
alert(resultat)

// пользователб вводит с клавиатуры баллы по 3 предметам программа должна выводить результатом среднюю арифметическую и вывести оценку и при этом есть градация 90-100 баллов это 5
 // 75-89 это 4 
 // 60-74 это 3
 // все что ниже это 2

let pred = +prompt("введите балл 1 пред: ")
let predd = +prompt("введите балл 2 пред: ")
let preddd = +prompt("введите балл 3 пред: ")
let res = (pred + predd + preddd)/3;
if( res >= 90 && res <= 100){
    alert("vasha ocenka 5")
}
else if( res >=75 && res <=89){
    alert("vasha ocenka 4")
}
else if(res >= 60 && res <= 74){
    alert("vasha ocenka 3")
}
else{
    alert("vasha ocenka 2")
}




// ПЕРВОЕ 
let a = +prompt("выедите сумму покупок:")

if (a > 2000 && a < 5000 ) 
{ 
console.log("ваша скидка 15%");
}
else if ( a > 5000)
{
console.log("ваша скидка 30%");
}
else if ( a > 1000 && a < 2000)
{
console.log("ваша скидка 10%");
} 
else if ( a < 1000)
{
console. log("у вас нету скидки");
}  


//ВТОРОЕ 
let a = +prompt("vvedite chislo")

switch(a){
    case 1:
        alert("ponedelnik");
        break;
    case 2:
        alert("vtornik");
        break;
    case 3:
         alert("sreda");
         break;
    case 4:
         alert("chetverg");
         break;
    case 5:
         alert("pyatnisa");
         break;
    case 6:
        alert("subbota");
              break;
     case 7:
          alert("voskresenie");
          break;
    default:
        alert("vne diapazona");
        break;
    }