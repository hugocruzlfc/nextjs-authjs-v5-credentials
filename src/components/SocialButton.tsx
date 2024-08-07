"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface SocialButtonProps {
  children: React.ReactNode;
  provider: string;
}

export function SocialButton({ children, provider }: SocialButtonProps) {
  const handleClick = async () => {
    await signIn(provider);
  };
  return <Button onClick={handleClick}>{children}</Button>;
}
