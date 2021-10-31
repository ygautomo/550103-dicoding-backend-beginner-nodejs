/**
 * Filename: 0311-filesystem-sync.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0311 Dasar-dasar Node.js- Filesystem
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const fs = require('fs');

const txtFile01 = fs.readFileSync('0306-globalobject.txt', 'UTF-8');
const txtFile02 = fs.readFileSync('0307-processobject.txt', 'UTF-8');

console.log(txtFile01);
console.log("----------");
console.log(txtFile02);

// Running command
// node 0311-filesystem-sync.js
