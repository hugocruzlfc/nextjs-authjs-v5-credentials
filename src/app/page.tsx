import LogoutButton from "@/components/LogoutButton";
import { Button } from "@/components/ui/button";
import { UserInfo } from "@/components/UserInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center p-10 flex-col">
      <h1 className=" text-2xl text-center"> Authjs integration to Next</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="mt-10 flex flex-col">
          <Link href="/login">
            <Button variant="link">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="link">Register</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="link">Dashboard</Button>
          </Link>
          <Link href="/admin">
            <Button variant="link">Admin</Button>
          </Link>
        </div>
        <UserInfo />
      </div>
    </main>
  );
}
