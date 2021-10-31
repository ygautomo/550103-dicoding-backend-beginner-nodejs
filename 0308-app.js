/**
 * Filename: 0308-app.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0308 Dasar-dasar Node.js- Modularization
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const coffee = require("./0308-lib/0308-coffee");
const { firstName, lastName } = require("./0308-lib/0308-user");

console.log("Library coffee");
console.log(coffee);

console.log("");
console.log("Library user");
console.log(firstName, lastName);

// Running command
// node 0308-app.js
