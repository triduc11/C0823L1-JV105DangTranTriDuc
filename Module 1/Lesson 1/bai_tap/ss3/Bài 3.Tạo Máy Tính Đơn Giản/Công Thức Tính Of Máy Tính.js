function xoa() {
    document.getElementById("result").value="" ;
}
function nhapSo(value) {
    document.getElementById("result").value+=value ;
}
function tinhToan() {
    let p = document.getElementById("result").value ;
    let q = eval(p);
    //eval() tính các giá trị bên trong nó theo kiểu string , nó có thể hiểu được các phép toán
    document.getElementById("result").value =q ;
}