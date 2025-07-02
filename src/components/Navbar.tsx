import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <SignedOut>
          <li>
            <Link href="/sign-in">Sign In Link</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up Link</Link>
          </li>
          <li>
            <Link href="/profile">Profile Link</Link>
          </li>
        </SignedOut>

        <SignedIn>
          <li>
            <UserButton />
          </li>
          <li>
            <span>You&apos;re signed in!</span>
          </li>
        </SignedIn>
      </ul>
    </nav>
  );
};

export { Navbar };
