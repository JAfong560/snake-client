const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: '165.227.47.243', // IP address here,
      port: 50541 // PORT number here,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    
    conn.on('connect', (data) => {  
        console.log("J connected!");
        conn.write("Name: JON")
        // conn.write('Move: up');
        
      })
      conn.on('data', (data) => { //get message back from server
        console.log('NEW MESSAGE FROM THE SERVER', data)
      })
  
    return conn;
  };

  module.exports = connect;