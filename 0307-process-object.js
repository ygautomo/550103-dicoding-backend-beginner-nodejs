/** Filename: 0307-process-object.js
* Course: Dicoding -- 01 Backend Developer Path- 03 Belajar Membuat Aplikasi Back-End untuk Pemula
* Description: Module 0306 Dasar-dasar Node.js- Process Object
* Directory: D:\04 Work\03 Training Course\55 Dicoding\01 Backend Developer Path\03 Course -- Back End Beginners
* Reference Link: https://www.dicoding.com/academies/261/tutorials/14213
* Repository: 550103-dicoding-01-nodejs
* 
* Author: Yugo Gautomo
* Status: Final April 01, 2022
*/

// run Node JS console or REPL
// node ./550103-dicoding-01-nodejs/0307-process-object.js        // run Node JS console or REPL
// node -i -e "$(< ./550103-dicoding-01-nodejs/0307-process-object.js)"
// node
// .load ./550103-dicoding-01-nodejs/0307-process-object.js

// uncomment one of these lines
console.log("Hello World");                                   // return "Hello World"
console.log("Hello World, NodeJS REPL");                      // return "Hello World, NodeJS REPL"
Object.getOwnPropertyNames(global);                           // return array global object
Object.getOwnPropertyNames(process);                          // return array process global object
Object.getOwnPropertyDescriptors(process);                    // return array process global object descriptor
Object.getOwnPropertyNames(console);                          // return array console global object
Object.getOwnPropertyNames(process.env);                      // return array process.env global object
Object.getOwnPropertyNames(process.env.PWD);                  // return array process.env.PWD global object
Array.isArray(Object.values(process.env.PWD));                // return true
Object.values(process.env.PWD).join('');                      // return array process.env.PWD global values
// Object.getOwnPropertyNames([global/process/console/setTimeout/clearTimeout/setInterval/clearInterval]);
// .exit                                                         // exit Node JS console or REPL

// uncomment one of these lines
// running form 0307-process-object.sh
// console.log("Hello World, running from Bash");                // return "Hello World, running from Bash"
// console.log("Hello World, NodeJS REPL");                      // return "Hello World, NodeJS REPL"
// console.log(Object.getOwnPropertyNames(global));              // return array global object
// console.log(Object.getOwnPropertyNames(process));             // return array process global object
// Object.getOwnPropertyDescriptors(process);                    // return array process global object descriptor
// console.log(Object.getOwnPropertyNames(console));             // return array console global object
// console.log(Object.getOwnPropertyNames(process.env));         // return array process.env global object
// console.log(Object.getOwnPropertyNames(process.env.PWD));     // return array process.env.PWD global object
// console.log(Array.isArray(Object.values(process.env.PWD)));   // return true
// console.log(Object.values(process.env.PWD).join(''));         // return array process.env.PWD global values
// Object.getOwnPropertyNames([global/process/console/setTimeout/clearTimeout/setInterval/clearInterval]);
// .exit                                                         // exit Node JS console or REPL

// Running command
// node
// .load 0306-global-object.js
// .load ./550103-dicoding-01-nodejs/0306-global-object.js

// Reference:
// - Mozilla Developer Network, MDN Web Docs (https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
// - The Modern JavaScript Tutorial (https://javascript.info)
// - Node.js v17.9.0 documentation (https://nodejs.org/dist/latest-v17.x/docs/api/process.html)
