function check() {
    var email = document.getElementById("form1").value;
    var number = document.getElementById("form2").value;
    if (!validateEmail(email)) emailRed();
    else emailGreen();
    if (!validateNumber(number)) numRed();
    else numGreen();
}
function validateEmail(email) {
    var a = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return a.test(String(email).toLowerCase());
}
function validateNumber(number) {
    var a = /^\d+$/;
    return a.test(String(number).toLowerCase());
}
function numRed() {
    document.getElementById("form2").style.color = "red";
    document.getElementById("form2").style.borderColor = "red";
}
function emailRed() {
    document.getElementById("form1").style.color = "red";
    document.getElementById("form1").style.borderColor = "red";
}
function numGreen() {
    document.getElementById("form2").style.color = "green";
    document.getElementById("form2").style.borderColor = "green"; 
}
function emailGreen() {
    document.getElementById("form1").style.color = "green";
    document.getElementById("form1").style.borderColor = "green";  
}

