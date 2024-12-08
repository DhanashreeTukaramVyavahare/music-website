// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Send a welcome message to the client
  ws.send('Hello from the WebSocket server!');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
    // You can send a response back to the client
    ws.send('Message received: ' + message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
