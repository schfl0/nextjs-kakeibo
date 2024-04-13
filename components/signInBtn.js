"use client";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/income" })}
      className="flex items-center justify-center rounded-full bg-stone-800 px-4 py-2 text-stone-50 hover:bg-stone-700"
    >
      Sign in
    </button>
  );
}
