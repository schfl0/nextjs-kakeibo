"use client";
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-center rounded-full bg-stone-800 px-4 py-2 text-stone-50 hover:opacity-80"
    >
      Sign out
    </button>
  );
}
