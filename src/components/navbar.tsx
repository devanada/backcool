import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative flex min-h-navbar w-full justify-center bg-primary text-white">
      <div className="container flex h-full items-center justify-between rounded-b-2xl p-3">
        {/* TODO: Change to logo */}
        <Link href="/">Backcool</Link>
        <div className="flex items-center gap-3">
          <>
            <Link href="/login">Login</Link>
            <Link
              href="/register"
              className="rounded-xl border border-white bg-primary p-2"
            >
              Register
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
}
