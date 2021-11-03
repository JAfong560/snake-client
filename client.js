const net = require("net");
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: IP, // IP address here,
      port: PORT // PORT number here,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    
    conn.on('connect', (data) => {  
        console.log("J connected!");
        conn.write("Name: JON")

        // setTimeout(() => {
        //     conn.write('Move: up');
        // }, 2000);
        
      })
      conn.on('data', (data) => { //get message back from server
        console.log('NEW MESSAGE FROM THE SERVER', data)
      })
  
    return conn;
  };

  module.exports = connect;