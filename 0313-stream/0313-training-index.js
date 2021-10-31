/**
 * Filename: 0313-training-index.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0313 Dasar-dasar Node.js- Writeable Stream
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

/**
 * TODO:
 * Buatlah program untuk membaca teks 0313-traininig-input.txt dan menuliskannya ulang pada berkas 0313-traininig-output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');
const { resolve } = require('path');

const fileInput = path.resolve(__dirname, '0313-training-input.txt');
const fileOutput = resolve(__dirname,'0313-training-output.txt');

const readableStream = fs.createReadStream(fileInput, {
	highWaterMark: 15
});

const writableStream = fs.createWriteStream(fileOutput);

readableStream.on('readable', () => {
	try {
		// process.stdout.write(`[${readableStream.read()}]`);
		writableStream.write(`[${readableStream.read()}]\n`);
		// console.log(`[${readableStream.read()}]`);
	} catch(error) {
		// catch the error when the chunk cannot be read.
	}
});

readableStream.on('end', () => {
	console.log('Done');
});

// Running command
// node ./0313-stream/0313-training-index.js
