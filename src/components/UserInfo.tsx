"use client";
import { useSession } from "next-auth/react";
import * as React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

export function UserInfo() {
  const session = useSession();

  console.log(session);

  const userAuth = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <FaRegUserCircle size={22} />
        <LogoutButton />
      </div>
    );
  };
  return <div>{session?.data ? userAuth() : <p>Not authenticated!</p>}</div>;
}
