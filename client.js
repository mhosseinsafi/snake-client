const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // incoming data from the server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  // handle successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");
    

    // sending name
    conn.write("Name: Hos");
         
  });

  return conn;
};

module.exports = { connect };