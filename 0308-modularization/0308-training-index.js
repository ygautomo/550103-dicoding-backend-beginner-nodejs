/**
 * Filename: 0308-training-index.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0308 Dasar-dasar Node.js- Modularization
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const Tiger = require("./0308-training-tiger");	// TODO 03
const Wolf = require("./0308-training-wolf"); 	// TODO 04

const fighting = (tiger, wolf) => {
if(tiger.strength > wolf.strength) {
	tiger.growl();
	return;
}

if(wolf.strength > tiger.strength) {
	wolf.howl();
	return;
}

console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);

// Running command
// node ./0308-modularization/0308-training-index.js
