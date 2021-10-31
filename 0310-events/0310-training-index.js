/**
 * Filename: 0310-training-index.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0310 Dasar-dasar Node.js- Events
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

// TODO 01
const { EventEmitter } = require('events');

// TODO 02
const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
	console.log(`Happy birthday ${name}!`);
}

// TODO 03
myEmitter.on('birthday', birthdayEventListener);

// TODO 04
myEmitter.emit('birthday', 'Agutus');

// Running command
// node ./0310-events/0310-training-index.js
