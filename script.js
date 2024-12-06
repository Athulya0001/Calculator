let add = document.getElementById('add');
add.addEventListener("click", function(a,b){
    let addidion = a + b;
    console.log(addidion)
})

let subtract = document.getElementById("subtract");
subtract.addEventListener("click",function(a,b){
    let subtraction = a - b;
    console.log(subtraction)
})

let multiply = document.getElementById("multiply")
multiply.addEventListener("click",function(a,b){
    let multiplication = a * b;
    console.log(multiplication)
}