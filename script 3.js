// Short hand array creation
//var names = [ "Yaakov", "John", "Joe"];
//console.log(names);

//for (var i =0; i< names.length; i++) {
//   console.log("Hello" + names[i]);
//}


//names[100] = "Jim";
//for (var i = 0; i < names.length; i++) {
//  console.log("Hello" + names[i])
//}




var names2 = ["Yaakov", "Paul", "Joe", "Frank","Larry", "Paula", "Laura"];

//var myObj = {
  //name: "Yaakov",
  //course: "HTML/CSS/JS",
  //platform: "Coursera"
//};
//for (var prop in myObj) {
//   console.log(prop + ":" + myObj[prop]);

// }


for (var name in names2) {
  console.log("Hello" + names2[name]);
}

names2.greeting = "Hi!";





var names3 = ["John", "Jen", "Jim", "Jason"];

for (var name in names3) {
  console.log("Goodbye" + names3[name]);
}





