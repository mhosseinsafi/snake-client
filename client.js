const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

   // incoming data from the server
   conn.on("data", (data) => {
    console.log("Server says:", data);
    // Additional processing or actions with the incoming data
  });

  return conn;
};

module.exports = { connect };
