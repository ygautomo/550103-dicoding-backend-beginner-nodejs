#!/bin/bash

#  /** Filename: 0307-process-object.sh
#  * Course: Dicoding -- 01 Backend Developer Path- 03 Belajar Membuat Aplikasi Back-End untuk Pemula
#  * Description: Module 0307 Dasar-dasar Node.js- Process Object
#  * Directory: D:\04 Work\03 Training Course\55 Dicoding\01 Backend Developer Path\03 Course -- Back End Beginners
#  * Reference Link: https://www.dicoding.com/academies/261/tutorials/14213
#  * Repository: 550103-dicoding-01-nodejs
#  * 
#  * Author: Yugo Gautomo
#  * Status: Final March 01, 2022
#  */

node ./550103-dicoding-01-nodejs/0307-process-object.js        # run Node JS console or REPL
# node -i -e "$(< ./550103-dicoding-01-nodejs/0307-process-object.js)"
# node
# .load ./550103-dicoding-01-nodejs/0307-process-object.js

# uncomment one of these lines
# console.log("Hello World");                                   # return "Hello World"
# console.log("Hello World, NodeJS REPL");                      # return "Hello World, NodeJS REPL"
# Object.getOwnPropertyNames(global);                           # return array global object
# Object.getOwnPropertyNames(process);                          # return array process global object
# Object.getOwnPropertyDescriptors(process);                    # return array process global object descriptor
# Object.getOwnPropertyNames(console);                          # return array console global object
# Object.getOwnPropertyNames(process.env);                      # return array process.env global object
# Object.getOwnPropertyNames(process.env.PWD);                  # return array process.env.PWD global object
# Array.isArray(Object.values(process.env.PWD));                # return true
# Object.values(process.env.PWD).join('');                      # return array process.env.PWD global values
# Object.getOwnPropertyNames([global/process/console/setTimeout/clearTimeout/setInterval/clearInterval]);
# .exit                                                         # exit Node JS console or REPL

# uncomment one of these lines
# running form 0307-process-object.sh
# console.log("Hello World, running from Bash");                # return "Hello World, running from Bash"
# console.log("Hello World, NodeJS REPL");                      # return "Hello World, NodeJS REPL"
# console.log(Object.getOwnPropertyNames(global));              # return array global object
# console.log(Object.getOwnPropertyNames(process));             # return array process global object
# console.log(Object.getOwnPropertyDescriptors(process));       # return array process global object descriptor
# console.log(Object.getOwnPropertyNames(console));             # return array console global object
# console.log(Object.getOwnPropertyNames(process.env));         # return array process.env global object
# console.log(Object.getOwnPropertyNames(process.env.PWD));     # return array process.env.PWD global object
# console.log(Array.isArray(Object.values(process.env.PWD)));   # return true
# console.log(Object.values(process.env.PWD).join(''));         # return array process.env.PWD global values
# console.log(Object.getOwnPropertyNames([global/process/console/setTimeout/clearTimeout/setInterval/clearInterval]);
# .exit                                                         # exit Node JS console or REPL

# Running command
# bash 0307-process-object.sh
# bash ./550103-dicoding-01-nodejs/0307-process-object.sh

# chmod a+x ./550103-dicoding-01-nodejs/0307-process-object.sh
# ./550103-dicoding-01-nodejs/0307-process-object.sh

# Reference:
# - Mozilla Developer Network, MDN Web Docs (https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
# - The Modern JavaScript Tutorial (https://javascript.info)
# - Node.js v17.9.0 documentation (https://nodejs.org/dist/latest-v17.x/docs/api/process.html)
