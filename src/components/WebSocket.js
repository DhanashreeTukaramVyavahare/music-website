// WebSocketComponent.js
import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
  const [message, setMessage] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000'); // Replace with your WebSocket server URL
    setSocket(ws);

    // Handle incoming messages
    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.send('Hello from React!');
    }
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">WebSocket Demo</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={sendMessage}
      >
        Send Message
      </button>
      {message && <p className="mt-4">Message from server: {message}</p>}
    </div>
  );
};

export default WebSocketComponent;
