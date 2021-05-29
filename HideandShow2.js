function myFunction() {
    var div1 = document.getElementById("myDIV")
    var div2 = document.getElementById("myDIV2")
    if (div1.style.display == "block") {
        div1.style.display = "none";
        div2.style.display = "block"
    }
    else {
        div1.style.display = "block";
        div2.style.display = "none";
    }
}


