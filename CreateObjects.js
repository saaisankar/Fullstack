function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");


// document.write(p1.age + "<br>");
// document.write(p2.name);




var person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
};
// var x = person.age;
// var y = person['height'];


for (var i = 0 in person) {
    console.log(person[i]);
}

// document.write(x + "<br>");
// document.write(y);