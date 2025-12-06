// non primitive data type
//we can say them objects
// two types are there: array, functions


// object create:    object={key:value, key:value}

const student = {
    fullname: "Naznin",
    Age: 23,
    cgpa: 3.80,
    isPassed: true,
}

// two ways of access value for print
console.log(student.Age);
console.log(student["fullname"]);

console.log(typeof student);
console.log(typeof student["fullname"]);
console.log(typeof student["age"]);
console.log(typeof student["cgpa"]);
console.log(typeof student["isPassed"]);


const student2 = {
    name : "naznin",
    roll : 30,
    cgpa: 3.61,
};
   console.log (student2["cgpa"]);

const human = {
    name: "roshni",
    age: 23,
    class: 14,
};
 human.age = human.age + 5;
   console.log (human["name"]);
   console.log(human.class);
   console.log(human.age);

  
