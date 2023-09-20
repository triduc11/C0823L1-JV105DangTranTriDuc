function phepCong() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let Result = Number(n1) + Number(n2);
    document.getElementById("Result").innerHTML = Result ;
}
function phepTru() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let Result = Number(n1) - Number(n2);
    document.getElementById("Result").innerHTML = Result ;
}
function phepNhan() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let Result = Number(n1) * Number(n2);
    document.getElementById("Result").innerHTML = Result ;
}
function phepChia() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let Result = Number(n1) / Number(n2);
    document.getElementById("Result").innerHTML = Result ;
}

