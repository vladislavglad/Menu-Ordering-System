# Menu-Ordering-System
System that takes and processes orders for breakfast, lunch, and dinner based on specific constraints

## To run locally:
### 1. Prerequisites:
* Node.js installed on your machine.
* Download this repository **-OR-**
* `git clone https://github.com/vladislavglad/Menu-Ordering-System.git`

### 2. In the project directory:
* #### `npm install` - Installs all dependencies necessary.
* #### `npm test` - Runs tests of key components.
* #### `npm start` - Start local server and opens default browser.

## How to use:
* Make sure the server is running - http://127.0.0.1:3000/ should return some **JSON**.
* To order your meal - go to `http://127.0.0.1:3000/{your meal}/{your order}`

Example: 
1. http://127.0.0.1:3000/breakfast/1,2,3 
2. http://127.0.0.1:3000/lunch/1,2,3 
3. http://127.0.0.1:3000/dinner/1,2,3,4 

## Dependencies:
* `express` - setup API routes.
* `jest` - JavaScript testing framework.
* `open` - opens a default browser at given URL.
