"use client";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import Image from "next/image";

function Guest() {
  const session = useAuth();

  return (
    <li>
      {session?.user?.image ? (
        <Link
          href="/account"
          className="flex items-center gap-4 transition-colors hover:text-accent-400"
        >
          <div className="relative h-8 w-8">
            <Image
              src={session.user.image}
              alt={session.user.name}
              className="rounded-full object-cover"
              referrerPolicy="no-referrer"
              fill
            />
          </div>
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="transition-colors hover:text-accent-400"
        >
          Guest area
        </Link>
      )}
    </li>
  );
}

export default Guest;
