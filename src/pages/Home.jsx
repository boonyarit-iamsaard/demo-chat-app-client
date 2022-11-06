import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  /**
   * Submit the form
   * @param {import('react').FormEvent<HTMLFormElement>} e The form event
   */
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/chat');
  };
  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-center text-lg font-bold">Sign in to Open Chat</h2>
      <div className="flex flex-col space-y-2">
        <input
          aria-label="Username"
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="rounded-md border border-gray-300 px-4 py-2"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-gray-500 px-4 py-2 text-white"
      >
        SIGN IN
      </button>
    </form>
  );
};

export default Home;
