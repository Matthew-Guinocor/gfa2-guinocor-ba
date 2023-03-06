// Formative Assessment 2 (I will make the functions LATER.)

// Addition
function addOp() {
    var add1 = document.getElementById("num1").value;
    var add2 = document.getElementById("num2").value;
    var addResult = +add1 + +add2; // I used + on each variable so that it won't result in concatenating them.
    document.getElementById("result").innerHTML = "The sum of " +add1+ " and " +add2+ " is " +addResult+ ".";
}

// Subtraction
function subOp() {
    var sub1 = document.getElementById("num1").value;
    var sub2 = document.getElementById("num2").value;
    var subResult = sub1 - sub2;
    document.getElementById("result").innerHTML = "The difference of " +sub1+ " and " +sub2+ " is " +subResult+ ".";
}

// Multipication
function multiOp() {
    var multi1 = document.getElementById("num1").value;
    var multi2 = document.getElementById("num2").value;
    var multiResult = multi1 * multi2;
    document.getElementById("result").innerHTML = "The product of " +multi1+ " and " +multi2+ " is " +multiResult+ ".";
}

// Division
function divideOp() {
    var divide1 = document.getElementById("num1").value;
    var divide2 = document.getElementById("num2").value;
    var divideResult = divide1 / divide2;
    document.getElementById("result").innerHTML = "The quotient of " +divide1+ " and " +divide2+ " is " +divideResult+ ".";
}

// Modulo
function modOp() {
    var mod1 = document.getElementById("num1").value;
    var mod2 = document.getElementById("num2").value;
    var modResult = mod1 % mod2;
    document.getElementById("result").innerHTML = "The remainder of " +mod1+ " and " +mod2+ " is " +modResult+ ".";
}

