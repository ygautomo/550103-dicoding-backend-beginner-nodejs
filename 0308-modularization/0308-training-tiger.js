/**
 * Filename: 0308-training-tiger.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0308 Dasar-dasar Node.js- Modularization
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

class Tiger {
	constructor() {
		this.strength = Math.floor(Math.random() * 100);
	}

	growl() {
		console.log('grrrrr!')
	}
}

// TODO 01
module.exports = Tiger;
