/**
 * Filename: 0311-filesystem-async.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0311 Dasar-dasar Node.js- Filesystem
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const fs = require('fs');

const fileReadCallback = (error, data) => {
	if(error) {
		console.log('Gagal membaca berkas');
		return;
	}
	console.log(data);
};

fs.readFile('0306-globalobject.txt', 'UTF-8', fileReadCallback);
console.log("----------");
fs.readFile('0307-processobject.txt', 'UTF-8', fileReadCallback);

// Running command
// node 0311-filesystem-async.js
