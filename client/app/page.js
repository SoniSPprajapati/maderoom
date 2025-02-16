"use client";
import { useState } from "react";
import { Button, HeroUIProvider } from "@heroui/react";
import { Inputs, SignUp, Messages } from "@/components";
import { io } from "socket.io-client";

const socket = io(
  "https://psychic-xylophone-r4rp9xjw7pgx2pw57-8000.app.github.dev/"
);

export default function Home() {
  const [user, setUser] = useState("");

  return (
    <HeroUIProvider>
      <div>
        {user ? (
          <>
            <Messages />
            <Inputs />
          </>
        ) : (
          <SignUp setUser={setUser} socket={socket} />
        )}
      </div>
    </HeroUIProvider>
  );
}