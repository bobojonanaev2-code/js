let n = +prompt("Введите число");

if(n % 2 === 0){

    let sum = 1
    for(let i = 1; i < n; i++)
    {
        sum = sum + i;
        console.log(sum);
    }
}
else{
    let multiplikation = 1;
    for(let i = 0; i < n; i++)
{
    multiplication = multiplication * i;
    console.log(multiplication);
}
}