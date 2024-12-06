let operationInput = document.getElementById("operation");

function Clear() {
    operationInput.value = "";
}

function Delete() {
    operationInput.value = operationInput.value.slice(0, -1);
}

function Solve() {
    let value = event.target.value;
    operationInput.value += value;
}

function Result() {
    try {
        let result = eval(operationInput.value.replace(/x/g, '*'));
        operationInput.value = result;
    } catch (error) {
        operationInput.value = "Error";
    }
}
