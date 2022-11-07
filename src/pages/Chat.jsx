import { ChatBar, ChatBody, ChatInput } from '../components/chat';

const Chat = () => {
  return (
    <div className="flex">
      <ChatBar />
      <div className="flex-[0.75] space-y-4">
        <ChatBody />
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
