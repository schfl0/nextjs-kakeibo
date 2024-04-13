import { arvo, inter } from "@/ui/fonts";
import Link from "next/link";
import SignInBtn from "./signInBtn";
import SignOutBtn from "./signOutBtn";
import Image from "next/image";
import Nav from "@/components/nav";

export default function Header({ session }) {
  console.log("from header: ", session);
  return (
    <>
      <header
        className={`${inter.className} flex items-center justify-between rounded-lg px-4 py-8 text-stone-800 shadow-md`}
      >
        <Link href="/">
          <h1 className={`${arvo.className} text-3xl`}>Kakeibo</h1>
        </Link>
        <div className="flex items-center justify-center">
          {!session && <SignInBtn />}
          {session && (
            <>
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={37}
                height={37}
                className="mr-4 rounded-full"
              />
              <SignOutBtn />
            </>
          )}
        </div>
      </header>
      {session && <Nav />}
    </>
  );
}
