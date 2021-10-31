/**
 * Filename: 0308-user.js
 * Course: Dicoding -- Belajar Membuat Aplikasi Back-End untuk Pemula
 * Description: Module 0308 Dasar-dasar Node.js- Modularization
 * Repository: 550103-dicoding-backend-beginner-nodejs
 * 
 * Author: Yugo Gautomo
 * Status: Final November 01, 2021
 */

const firstName = 'Harry';
const lastName = 'Potter';

// gunakan object literal untuk mengekspor lebih dari satu nilai
module.exports = { firstName, lastName };
