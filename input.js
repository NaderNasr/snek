let connection;

const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
  
};

const handleUserInput = (data) => {
  console.log(data);
  process.stdin.on('data', (key) => {
    if (key === '\u0003') { //Exit application
      process.exit();
    }
    
  });
  
};

handleUserInput();

module.exports = {
  setupInput,
  connection
};