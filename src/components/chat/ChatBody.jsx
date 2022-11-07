import { useNavigate } from 'react-router-dom';

const ChatBody = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <p className="font-semibold">Hangout with Colleagues</p>
        <button
          className="rounded-md bg-amber-500 px-4 py-2 text-white"
          onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="relative min-h-[50vh] overflow-scroll rounded-md bg-white p-4">
        <div>
          <p className="text-right text-xs">You</p>
          <div className="ml-auto max-w-xs rounded-md bg-slate-300 p-2 text-sm">
            <p>Hello there</p>
          </div>
        </div>

        {/*This shows messages received by you*/}
        <div>
          <p className="text-left text-xs">Other</p>
          <div className="mr-auto max-w-xs rounded-md bg-slate-300 p-2 text-sm">
            <p>Hey, I am good, you?</p>
          </div>
        </div>

        {/*This is triggered when a user is typing*/}
        <div className="absolute bottom-2 text-xs italic">
          <p>Someone is typing...</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
