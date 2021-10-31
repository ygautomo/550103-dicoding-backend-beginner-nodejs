/**
 * Filename: 0307-training-index.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0307 Dasar-dasar Node.js- Process Object
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const initialMemoryUsage = process.memoryUsage().heapUsed	// TODO 01
const yourName = process.argv[2]							// TODO 02
const environment = process.env.NODE_ENV					// TODO 03

for(let i = 0; i <= 10000; i++) {
	// Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// Running command
// NODE_ENV=production node 0307-training-index.js Yugo Goutomo
