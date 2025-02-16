import React from "react";
import Chat from "./Chat";

function Messages({ messages, id }) {
  return (
    <div className="min-h-[90vh] container mx-auto pt-5 flex gap-1 flex-col">
      {messages.map((message, idx) => (
        <Chat key={idx} message={message} own={message.id === id} />
      ))}
    </div>
  );
}

export default Messages;