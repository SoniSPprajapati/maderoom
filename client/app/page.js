"use client";
import { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Inputs, SignUp, Messages } from "@/components";
import { io } from "socket.io-client";

const socket = io(
  "https://effective-dollop-jjqqj7p675p72q444-8000.app.github.dev/"
);

export default function Home() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("new_message", (message) => {
      setMessages((prevState) => [...prevState, message]);
    });
  }, []);

  return (
    <HeroUIProvider>
      <div>
        {user ? (
          <>
            <Messages messages={messages} id={socket.id} />
            <Inputs socket={socket} user={user} setMessages={setMessages} />
          </>
        ) : (
          <SignUp setUser={setUser} socket={socket} />
        )}
      </div>
    </HeroUIProvider>
  );
}