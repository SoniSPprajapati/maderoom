import { useState, useRef } from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizonal, UploadIcon } from "lucide-react";
import React from "react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputFile = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      inputFile.current.click();
    }

    console.log(input);
    // Empty input field
    setInput("");
  };

  return (
    <form
      className="h-[10vh] flex items-end sm:items-center max-w-5xl mx-auto gap-0 sm:gap-1"
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        placeholder="Enter a message"
        autoComplete="off"
        size="lg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <input
        type="file"
        name="file"
        accept="image/png, image/gif, image/jpeg"
        ref={inputFile}
        hidden
      />

      <Button className="bg-emerald-300" size="lg" type="submit">
        {input ? <SendHorizonal /> : <UploadIcon />}
      </Button>
    </form>
  );
}

export default Inputs;