"use client";
import { useState } from "react";
import Input from "./componets/ui/Input";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      setErrorText("Name is required");
    } else {
      setErrorText("");
      setUserName();
      console.log("Name submitted:", userName);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen text-red-500 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          errorText={errorText}
          width='33px'
          placeholder="Enter your name"
          // variant='password'
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
