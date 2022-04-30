#!/bin/bash

#  /** Filename: 0205-exercise.sh
#  * Course: Dicoding -- 01 Backend Developer Path- 03 Belajar Membuat Aplikasi Back-End untuk Pemula
#  * Description: Module 0205 Pengenalan ke Back-End- Latihan Membuat Permintaan HTTP
#  * Directory: D:\04 Work\03 Training Course\55 Dicoding\01 Backend Developer Path\03 Course -- Back End Beginners
#  * Reference Link: https://www.dicoding.com/academies/261/tutorials/14152
#  * Repository: 550103-dicoding-01-nodejs
#  * 
#  * Author: Yugo Gautomo
#  * Status: Final April 01, 2022
#  */

# uncomment one of these lines
curl -X GET https://coffee-api.dicoding.dev/coffees -i		                                                                          # return response status 200 OK
# curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i		# return response status 201 Created
# curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Luwak\"}" https://coffee-api.dicoding.dev/transactions -i		# return response status 404 Not Found
sleep 1m                                                                                                                            # delay for a specified amount of time
clear                                                                                                                               # clear the terminal screen

# Running command
# bash 0205-exercise.sh
# bash ./550103-dicoding-01-nodejs/0205-exercise.sh

# chmod a+x ./550103-dicoding-01-nodejs/0205-exercise.sh
# ./550103-dicoding-01-nodejs/0205-exercise.sh
