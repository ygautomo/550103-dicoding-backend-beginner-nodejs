/**
 * Filename: 0309-training-index.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0309 Dasar-dasar Node.js- Node Package Manager
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const _ = require("lodash");	// TODO 01

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);

// Running command
// npm install lodash
// node ./0309-node-package-manager/0309-training-index.js
// npm uninstall lodash