const { MOVE_DOWN, MOVE_UP, MOVE_RIGHT, MOVE_LEFT } = require("./constants");
// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (MOVE_UP === key) {
    connection.write("Move: up");
   
  } if (MOVE_LEFT === key) {
    connection.write("Move: left");
    
  } if (MOVE_DOWN === key) {
    connection.write("Move: down");
    
  } if (MOVE_RIGHT === key) {
    connection.write("Move: right");
  } if (key === 'm') {
    connection.write('Say: This is c00L')
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", (key) => handleUserInput(key));
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
