"use client";
import { Button, HeroUIProvider } from "@heroui/react";
import { Inputs, SignUp } from "@/components";
import { Chat } from "@/components/Messages";

export default function Home() {
  return (
    <HeroUIProvider>
      <div>
        <SignUp />
      </div>
    </HeroUIProvider>
  );
}