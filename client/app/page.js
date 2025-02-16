"use client";
import { Button, HeroUIProvider } from "@heroui/react";
import { Inputs, SignUp } from "@/components";

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="min-h-screen flex items-center justify-center flex-col gap-1">
        <h1 className="text-7xl">Hey there</h1>
        <Button>Click me</Button>
        <SignUp />
        <Inputs />
      </div>
    </HeroUIProvider>
  );
}