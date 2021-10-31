/**
 * Filename: 0308-training-wolf.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0308 Dasar-dasar Node.js- Modularization
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

class Wolf {
	constructor() {
		this.strength = Math.floor(Math.random() * 100);
	}

	howl() {
		console.log('owooooo!')
	}
}

// TODO 02
module.exports = Wolf;
