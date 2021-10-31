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

const readableStream = fs.createReadStream('./0312-article.txt', {
	highWaterMark: 10
});

readableStream.on('readable', () => {
	try {
		process.stdout.write(`[${readableStream.read()}]`);
	} catch(error) {
		// catch the error when the chunk cannot be read.
	}
});

readableStream.on('end', () => {
	console.log('Done');
});

// Running command
// node 0312-readablestream.js
