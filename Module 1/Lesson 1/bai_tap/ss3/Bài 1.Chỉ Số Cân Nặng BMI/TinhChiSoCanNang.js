function tinhChiSo() {
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    let bmi = (weight / (height  * height));
    document.getElementById("bmi").innerHTML = bmi;

    if (Number(bmi) < 18.5) {
        document.getElementById("tb").innerHTML = "Underweight";
    } else if (Number(bmi) < 25) {
        document.getElementById("tb").innerHTML = "Normal";
    }else if (Number(bmi) < 30) {
        document.getElementById("tb").innerHTML = "OverWeight";
    }else
        document.getElementById("tb").innerHTML = "Obese";
}