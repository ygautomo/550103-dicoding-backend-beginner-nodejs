#!/bin/bash

#  /** Filename: 0206-exercise-format.sh
#  * Course: Dicoding -- 01 Backend Developer Path- 03 Belajar Membuat Aplikasi Back-End untuk Pemula
#  * Description: Module 0206 Pengenalan ke Back-End- Format Request dan Response
#  * Directory: D:\04 Work\03 Training Course\55 Dicoding\01 Backend Developer Path\03 Course -- Back End Beginners
#  * Reference Link: https://www.dicoding.com/academies/261/tutorials/14162
#  * Repository: 550103-dicoding-01-nodejs
#  * 
#  * Author: Yugo Gautomo
#  * Status: Final April 01, 2022
#  */

# install jq Command-line JSON processor package
# jq is a lightweight and flexible command-line JSON processor, reference: https://stedolan.github.io/jq
# sudo apt-get update
# sudo apt-get install jq

# curl -X GET https://coffee-api.dicoding.dev/coffees -i                # return response status 200 OK
# curl -X GET https://coffee-api.dicoding.dev/coffees | jq              # return response status 200 OK
curl -s -X GET https://coffee-api.dicoding.dev/coffees | jq           # return response status 200 OK
# curl --Silent -X GET https://coffee-api.dicoding.dev/coffees | jq     # return response status 200 OK
# curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i             # return response status 201 Created
# curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions | jq           # return response status 201 Created
# curl -s -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions | jq        # return response status 201 Created
# curl --Silent -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions | jq  # return response status 201 Created
# curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions -i              # return response status 404 Not Found
# curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions | jq            # return response status 404 Not Found
# curl -s -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions | jq         # return response status 404 Not Found
# curl --Silent -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions | jq   # return response status 404 Not Found
sleep 1m                                                              # delay for a specified amount of time
clear                                                                 # clear the terminal screen

# Running command
# bash 0206-exercise-format.sh
# bash ./550103-dicoding-01-nodejs/0206-exercise-format.sh

# chmod a+x ./550103-dicoding-01-nodejs/0206-exercise-format.sh
# ./550103-dicoding-01-nodejs/0206-exercise-format.sh
