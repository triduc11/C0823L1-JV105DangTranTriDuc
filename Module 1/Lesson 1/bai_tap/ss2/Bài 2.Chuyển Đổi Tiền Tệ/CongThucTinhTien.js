function chuyenDoi() {
    let Amount= document.getElementById("tien").value ;
    let From= document.getElementById("from").value ;
    let To= document.getElementById("to").value ;
    let Result ;
    if (From == "USD" && To == "VND") {
        Result = "Result: " + (Amount *23000) + " Đ";
    }
    else if (From == "VND" && To =="USD"){
        Result = "Result: "+ (Amount /23000) + " $";
    }
    else if (From == "VND" && To == "VND") {
        Result = "Result: " + Amount + " Đ" ;
    }
    else if (From == "USD" && To =="USD") {
        Result = "Result: " + Amount + " $" ;
    }
    document.getElementById("Result").innerHTML = Result ;
}
