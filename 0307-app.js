/**
 * Filename: 0307-app.js
 * Course: Dicoding -- 01 Backend Developer Path- 03 Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0307 Dasar-dasar Node.js- Process Object
 * Directory: D:\04 Work\03 Training Course\55 Dicoding\01 Backend Developer Path\03 Course -- Back End Beginners
 * Reference Link: https://www.dicoding.com/academies/261/tutorials/14213
 * Repository: 550103-dicoding-01-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final March 01, 2022
 */

// 01 Node JS environment

// Object.getOwnPropertyNames(process);    # return array process global object

// 01 Node JS environment
// 0101 object literal
// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   }
// };

// person.address = "Bogor, Indonesia";      // assign new properties

// console.log("0101 object literal");
// console.log(person);                      // return object
// console.log(person.name);                 // return ['Bob', 'Smith']
// console.log(person.name[0]);              // return 'Bob'
// console.log(person.age);                  // return 32
// console.log(person.address);              // return "Bogor, Indonesia"
// person.bio();                             // return "Bob Smith is 32 years old."
// person.introduceSelf();                   // return "Hi! I'm Bob."

// 0102 object literal
// const person = {
//   name: {
//     first: "Bob",
//     last: "Smith"
//   },
//   age: 32,
//   bio: function() {
//     console.log(`${this.name['first']} ${this.name['last']} is ${this.age} years old.`);
//   },
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name['first']}.`);
//   }
// };

// person['age'] = 45;
// person['name']['last'] = "Cratchit";      // update new value
// person['address'] = "Bogor, Indonesia";   // assign new properties

// console.log("0102 object literal");
// console.log(person);                      // return object
// console.log(person.name);                 // return { first: 'Bob', last: 'Cratchit' }
// console.log(person.name['first']);        // return 'Bob'
// console.log(person.age);                  // return 32
// person.bio();                             // return "Bob Cratchit is 32 years old."
// person.introduceSelf();                   // return "Hi! I'm Bob."

// 0103 constructor function
function Person(name, age) {
  console.log(name[0]);
  this.name = {
    first: name[0] || "Bob",
    last: name[1] || "Smith"
  };
  this.age = age;
  // bio = function() {
  //   console.log(`${this.name['first']} ${this.name['last']} is ${this.age} years old.`);
  // }
  // introduceSelf = function() {
  //   console.log(`Hi! I'm ${this.name['first']}.`);
  // }
};


const bob2 = new Person(["Aditya", "Budi"], 25);
console.log("0103 function constructor");
// console.log(Person);                      // return object
// console.log(Person.name);                 // return { first: 'Bob', last: 'Cratchit' }
// console.log(Person.name['first']);        // return 'Bob'
// console.log(Person.age);                  // return 32
// Person.bio();                             // return "Bob Cratchit is 32 years old."
// Person.introduceSelf();                   // return "Hi! I'm Bob."

const bob = new Person("Budi", 25);
console.log(bob);                      // return object
console.log(bob.name);                 // return { first: 'Bob', last: 'Cratchit' }
console.log(bob.name['first']);        // return 'Bob'
console.log(bob.age);                  // return 32
// bob.bio();                             // return "Bob Cratchit is 32 years old."
// Person.introduceSelf();                   // return "Hi! I'm Bob."

// const test = new Server()



// 0103 constructor function
// function Server (args) {
//   this.host = args;
//   this.env = args.host;
//   this.test = "Bebek Bakar Madu";
// };

// class Server {
//   constructor(args){
//     this.host = args;
//     this.env = args.host;
//     this.test = "Bebek Bakar Madu";
//   }
// };



// const server = new Server({
// 	host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'
// });

// console.log(server.host);                // should return { host: 'dicoding.com' }
// console.log(server.env);                 // should return "dicoding.com"
// console.log(server.test);                // should return "Bebek Bakar Madu"

// Running command
// NODE_ENV=production node ./550103-dicoding-01-nodejs/0307-app.js

// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);

// Running command
// node 0307-app.js Yugo Gautomo

// References:
// - Mozzila Developer Network, MDN Web Docs (https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
// - The Modern JavaScript Tutorial (https://javascript.info/global-object)
// - Node.js v17.9.0 documentation (https://nodejs.org/api/process.html)
// - Node.js documentation (https://nodejs.org/en/knowledge/getting-started/globals-in-node-js)
