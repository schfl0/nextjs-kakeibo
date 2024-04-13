"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className={`mt-6 flex items-center justify-between text-stone-800`}>
      <ul className="flex items-center justify-start gap-6">
        <Link href="/overview">
          <li
            className={`${pathname === "/overview" ? "bg-blue-100" : "shadow-md"} rounded-full px-4 py-2  hover:bg-blue-100`}
          >
            Overview
          </li>
        </Link>
        <Link href="/expenses">
          <li
            className={`${pathname === "/expenses" ? "bg-yellow-100" : "shadow-md"} rounded-full px-4 py-2  hover:bg-yellow-100`}
          >
            Expenses
          </li>
        </Link>

        <Link href="/fixed-costs">
          <li
            className={`${pathname === "/fixed-costs" ? "bg-red-100" : "shadow-md"} rounded-full px-4 py-2  hover:bg-red-100`}
          >
            Fixed
          </li>
        </Link>
        <Link href="/income">
          <li
            className={`${pathname === "/income" ? "bg-green-100" : "shadow-md"} rounded-full px-4 py-2  hover:bg-green-100`}
          >
            Income
          </li>
        </Link>
      </ul>
    </nav>
  );
}
