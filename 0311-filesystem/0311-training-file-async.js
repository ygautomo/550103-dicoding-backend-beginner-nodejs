/**
 * Filename: 0311-training-file-async.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0311 Dasar-dasar Node.js- Filesystem
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

// TODO: tampilkan teks pada 0311-training-notes.txt pada console
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '0311-training-notes.txt');

const fileReadCallback = (error, data) => {
	if(error) {
		console.log('Gagal membaca berkas');
		return;
	}
	console.log(data);
};

// fs.readFile('./0311-filesystem/0311-training-notes.txt', 'UTF-8', fileReadCallback);
fs.readFile(filePath, 'UTF-8', fileReadCallback);

// Running command
// node ./0311-filesystem/0311-training-file-async.js
