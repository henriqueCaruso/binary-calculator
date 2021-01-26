let res = document.getElementById("res");

let btn0 = document.getElementById("btn0");
btn0.addEventListener("click", function () {
    res.innerHTML += 0;
});

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
    res.innerHTML += 1;
});
let btnClr = document.getElementById("btnClr");
btnClr.addEventListener("click", function () {
    res.innerHTML = "";
});
let btnSum = document.getElementById("btnSum");
btnSum.addEventListener("click", function () {
    res.innerHTML += "+";
});
let btnSub = document.getElementById("btnSub");
btnSub.addEventListener("click", function () {
    res.innerHTML += "-";
});
let btnMul = document.getElementById("btnMul");
btnMul.addEventListener("click", function () {
    res.innerHTML += "*";
});
let btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener("click", function () {
    res.innerHTML += "/";
});
let btnEql = document.getElementById("btnEql");
btnEql.addEventListener("click", function () {
    let base2 = '';
    let base10;
    let exp = '';
    let str = res.innerHTML;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] !== '+') && (str[i] !== '-') &&
            (str[i] !== '/') && (str[i] !== '*')) {
            base2 += str[i];
            console.log(str[i]);
        } else {

            base10 = parseInt(base2, 2);
            exp += base10;
            exp += str[i];
            base2 = '';
        }
    }
    exp += parseInt(base2, 2);
    let result = Math.floor(eval(exp));
    let result2 = result.toString(2);
    console.log(result2);
    res.innerHTML = result2;
});