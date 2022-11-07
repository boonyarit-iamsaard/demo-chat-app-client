const ChatBar = () => {
  return (
    <div className="flex-[0.25] space-y-4 p-4">
      <h2 className="font-bold">Open Chat</h2>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold">ACTIVE USERS</h4>
        <div className="space-y-2 text-sm">
          <p>User 1</p>
          <p>User 2</p>
          <p>User 3</p>
          <p>User 4</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
