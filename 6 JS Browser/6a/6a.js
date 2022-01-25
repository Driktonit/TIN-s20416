document.getElementById("button1").addEventListener("click", function () {
    var value = document.getElementById("field1").value;
    convertF(value);
});
document.getElementById("button2").addEventListener("click", function () {
    var value = document.getElementById("field1").value;
    convertC(value);
});
function convertC(value) {
    value = parseFloat(value);
    document.getElementById("result1").innerHTML = ((value * 9 / 5) + 32).toFixed(2);
};
function convertF(value) {
    value = parseFloat(value);
    document.getElementById("result1").innerHTML = ((value - 32) / 1.8).toFixed(2);
};