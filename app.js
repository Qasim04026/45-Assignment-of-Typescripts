// Question # 3
//Name Cases: Store a person's name in a variable and than print that person's name in lowercase,uppercase and titlecase.
var personName = "Qasim Raza";
// in lowercase
console.log("lowercase:", personName.toLowerCase());
// in uppercase
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titleCase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
