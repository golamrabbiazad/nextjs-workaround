"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export function NavBar() {
  const { status, data: session } = useSession();

  return (
    <nav className="bg-white flex justify-between items-center">
      <ul className="flex p-5 items-center">
        <li className="px-5">
          <Link href={`/products`}>Products</Link>
        </li>
        <li>
          <Link href={`/admin`}>Admin</Link>
        </li>
        <li className="px-5">
          <Link href={`/users`}>Users</Link>
        </li>
      </ul>

      {status === "loading" && <p>Loading...</p>}

      {status === "authenticated" && (
        <div className="flex items-center">
          <p className="px-5">{session.user!.name}</p>
          <Button className="mx-5">
            <Link href={`/api/auth/signout`}>Sign Out</Link>
          </Button>
        </div>
      )}

      {status === "unauthenticated" && (
        <Button className="mx-5">
          <Link href={`/api/auth/signin`}>Login</Link>
        </Button>
      )}
    </nav>
  );
}
