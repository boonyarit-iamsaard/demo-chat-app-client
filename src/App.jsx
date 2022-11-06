import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { io } from 'socket.io-client';

import Chat from './pages/Chat';
import Home from './pages/Home';

const socket = io('http://localhost:5000');
socket.on('connect', () => {
  console.log('🟢: online');
});

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
