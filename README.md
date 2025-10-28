# Ict Expert Recruit Training Program
This github is the official Repo for the ict-expert-recruit traning for node.js programming. 

<img src="logo.jpg" alt="alt text" title="Title" width="600">

# Installation of the programming traning environment 

## Download standalone node.js
Download standalone node.js for Linux: https://nodejs.org/dist/v22.21.0/node-v22.21.0-linux-x64.tar.xz
Download standalone node.js for Windows : https://nodejs.org/dist/v24.10.0/node-v24.10.0-win-x64.zip

Unzip the file in the folder C:\Users\Public\Documents\node\

Download on this github the folder "rest-api" and put it in the "node" folder. 

Copy the file /node/rest-api/startscript.bat in the folder: C:\Users\[your username]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

Start your node.js server with : C:\Users\Public\Documents\node\node.exe C:\Users\Public\Documents\node\rest-api\server.js

# Exercices 
You have 10 exercice to realize in node.js. Each exercice is a route that responds to a specific request. 
When you have realize the route, you can add your js file in the rest-api/routes folder and restart node.exe to make it works !

Note that you wil find few examples in the routes folder to help you. You will also find the solution in the "solution" file on this github. 

## Exercice 1 
Create a route /add that accepts query parameters a and b, returns their sum as JSON.
## Exercice 2
Create a route /reverse taht accepts query parameter text and returns the reversed string.
## Exercice 3
Create a route /word-count that accepts sentence and returns the number of words.
## Exercice 4
Create a route /capitalize that accepts text and returns it with each word capitalized.
## Exercice 5
Create a route /reverse-array that accepts numbers (comma-separated) and returns reversed array.
## Exercice 6
Create a route /is-prime that accepts n and returns whether it is prime.
## Exercice 7
Create a route /delay that accepts seconds and responds after that many seconds.
## Exercice 8
Create a route /run-cmd that accepts cmd and executes it without blocking the HTTP response.
## Exercice 9
Create a route /joke that fetches a joke from https://official-joke-api.appspot.com/random_joke and returns it.
## Exercice 10
Create a route /login that accepts username and password. Responds success if they match a hardcoded user.



