let slovo = prompt("введите слово:")
let result = slovo.length;
console.log(result)


let slovo = prompt("введите слово:")
let res = slovo.includes("K")
let resultat = (res === true)?"в слове есть к":"в слове нет к"
alert(resultat)



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