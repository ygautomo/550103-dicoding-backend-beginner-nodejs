/**
 * Filename: 0307-app.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0307 Dasar-dasar Node.js- Process Object
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

// const server = new Server({
//	host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// console.log(server.host);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

// Running command
// node 0307-app.js Yugo Goutomo
