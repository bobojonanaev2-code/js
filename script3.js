let a = parseFloat(prompt("a="));
let b = parseFloat(prompt("b="));
let c = parseFloat(prompt("c="));

if (a === b && b === c) {
    console.log("ravnostorony");
} else if (a === b || b === c || a === c) {
    console.log("ravnobedreny");
}else if(a** 2+ b** 2===c || b** 2 + c** 2 === a ** 2|| a** 2+ c** 2===b ** 2){
    console.log("pramougolni");
}