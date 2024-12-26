const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve({ message: 'Success!' });
        } else {
          reject(new Error('Failed!'));
        }
      }, 1000);
    });
  };

  data()
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    })
    .catch((error) => {
      // The problem is here. The error is not handled properly. 
      console.error('Error:', error); //This only logs the error, not sending the error as response.
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'An unexpected error occurred' }));
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});