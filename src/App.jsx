import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');
socket.on('connect', () => {
  console.log('🟢: online');
});

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold">Demo - Chat App</h1>
    </div>
  );
}

export default App;
