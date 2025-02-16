import React from "react";
import { UserPlus2 } from "lucide-react";

function NewUser({ name }) {
  return (
    <div className="flex gap-1 items-center text-gray-600">
      <UserPlus2 /> {name} just joined!
    </div>
  );
}

export default NewUser;