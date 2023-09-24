let thang1 = 1;
let thang2 = 2;
let thang3 = 3;
let thang4 = 4;
let thang5 = 5;
let thang6 = 6;
let thang7 = 7;
let thang8 = 8;
let thang9 = 9;
let thang10 = 10;
let thang11 = 11;
let thang12 = 12;
function tinhSoNgay() {
    let thang=+document.getElementById("thang").value ;
    switch (thang) {
        case thang1:
        case thang3:
        case thang5:
        case thang7:
        case thang8:
        case thang10:
        case thang12:
           document.getElementById("result").innerHTML="thang "+ thang +" có 31 ngày"
        break ;
        case thang4:
        case thang6:
        case thang9:
        case thang11:
           document.getElementById("result").innerHTML="thang "+ thang +" có 30 ngày"
        break ;
        case thang2:
           document.getElementById("result").innerHTML="thang "+ thang +" có 28 or 29 ngày"
        break ;
    }
}