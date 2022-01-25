function insertFunction() {
    var table = document.getElementById("table");
    var row = table.insertRow(table.rows.length);
    var res = row.insertCell(0);
    res.innerHTML = document.getElementById("field").value;
}