# Json Server

https://github.com/typicode/json-server

# Setup json server and run

- Step 1: install json server
  npm i -g json-server

- Step 2: create file db.json

- Step 3: run json server
  json-server db.json

# Setup custom json-server

- Step 1: create package.json
  npm init

- Step 2: install json-server
  npm i json-server

- Step 3: setup local server
  npm i --save-dev nodemon

- Step 4: create file main.js and copy content by link
  https://github.com/typicode/json-server#custom-routes-example

- Step 5: config script in package.json
  "dev": "nodemon main.js",
  "start": "npm run generate-data && node main.js",

# Install random data

npm i --save-dev faker

# Install query string

npm i query-string
