#!/bin/bash

#  /** Filename: 0306-global-object.sh
#  * Course: Dicoding -- 01 Backend Developer Path- 03 Belajar Membuat Aplikasi Back-End untuk Pemula
#  * Description: Module 0306 Dasar-dasar Node.js- Node.js Global Object
#  * Directory: D:\04 Work\03 Training Course\55 Dicoding\01 Backend Developer Path\03 Course -- Back End Beginners
#  * Reference Link: https://www.dicoding.com/academies/261/tutorials/14212
#  * Repository: 550103-dicoding-01-nodejs
#  * 
#  * Author: Yugo Gautomo
#  * Status: Final April 01, 2022
#  */

node ./550103-dicoding-01-nodejs/0306-global-object.js        # run Node JS console or REPL
# node -i -e "$(< ./550103-dicoding-01-nodejs/0306-global-object.js)"
# node
# .load ./550103-dicoding-01-nodejs/0306-global-object.js

# uncomment one of these lines
# console.log("Hello World");                                   # return "Hello World"
# console.log("Hello World, NodeJS REPL");                      # return "Hello World, NodeJS REPL"
# Object.getOwnPropertyNames(global);                           # return array global object
# Object.getOwnPropertyNames(process);                          # return array process global object
# Object.getOwnPropertyNames(console);                          # return array console global object
# Object.getOwnPropertyNames([global/process/console/setTimeout/clearTimeout/setInterval/clearInterval]);
# .exit                                                         # exit Node JS console or REPL

# uncomment one of these lines
# running form 0306-global-object.sh
# console.log("Hello World, running from Bash");                # return "Hello World, running from Bash"
# console.log("Hello World, NodeJS REPL");                      # return "Hello World, NodeJS REPL"
# console.log(Object.getOwnPropertyNames(global));              # return array global object
# console.log(Object.getOwnPropertyNames(process));             # return array process global object
# console.log(Object.getOwnPropertyNames(console));             # return array console global object
# Object.getOwnPropertyNames([global/process/console/setTimeout/clearTimeout/setInterval/clearInterval]);
# .exit                                                         # exit Node JS console or REPL

# Running command
# bash 0306-global-object.sh
# bash ./550103-dicoding-01-nodejs/0306-global-object.sh

# chmod a+x ./550103-dicoding-01-nodejs/0306-global-object.sh
# ./550103-dicoding-01-nodejs/0306-global-object.sh

# Reference:
# - Mozilla Developer Network, MDN Web Docs (https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
# - The Modern JavaScript Tutorial (https://javascript.info/global-object)
# - Node.js v17.9.0 documentation (https://nodejs.org/dist/latest-v17.x/docs/api/globals.html)
# - Node.js documentation (https://nodejs.org/en/knowledge/getting-started/globals-in-node-js)
