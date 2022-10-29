//  ADD DATA FROM FORM TO TABLE
document.getElementById("submit").onclick = function() {
    var table = document.getElementById("bill-table");
    var row = table.insertRow(-1);
    var sn = row.insertCell(0);
    var item = row.insertCell(1);
    var qty = row.insertCell(2);
    var rate = row.insertCell(3);
    var amt = row.insertCell(4);
    sn.innerHTML = 1;
    item.innerHTML = document.getElementById("item").value;
    qty.innerHTML = document.getElementById("quatity").value;
    rate.innerHTML = document.getElementById("rate").value;
    amt.innerHTML = qty.innerHTML * rate.innerHTML;

    return false;
}