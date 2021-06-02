function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return true;
        }
        else {
            return false;
        }
    }
}
arr = [2, 5, 9, 6];
console.log(contains(arr, 17));



function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return true;
        }
        else {
            return false;
        }
    }
}
arr = ["Hi", "Hello", "Hey", "hey there"];
console.log(contains(arr, "hey"));

