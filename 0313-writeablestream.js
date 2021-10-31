/**
 * Filename: 0312-readablestream.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0312 Dasar-dasar Node.js- Readable Stream
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const fs = require('fs');
 
const writableStream = fs.createWriteStream('./0313-output.txt');

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');

// Running command
// node 0313-writeablestream.js
