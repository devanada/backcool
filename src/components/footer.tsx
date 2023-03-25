import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="mt-5 flex min-h-footer flex-col items-center justify-center gap-1 bg-secondary">
      <p>© Backcool {dayjs().year()}</p>
      <div className="flex gap-3 underline">
        <Link href="/categories">Categories</Link>
        <Link href="/products">Products</Link>
      </div>
      <p className="text-sm">
        Powered by <Link href="https://fakestoreapi.com/">Fake Store API</Link>
      </p>
    </footer>
  );
}
