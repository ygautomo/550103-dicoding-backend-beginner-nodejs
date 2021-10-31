/**
 * Filename: 0310-makecoffee-02.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0310 Dasar-dasar Node.js- Events
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
	console.log(`Kopi ${name} telah dibuat!`);
};
const makeBill = ({ price }) => {
	console.log(`Bill sebesar ${price} telah dibuat!`);
}

// mendaftarkan fungsi makeCoffee & makeBill sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

// Running command
// node 0310-makecoffee-02.js
