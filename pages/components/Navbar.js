import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="#">
        <a>Features</a>
      </Link>
      <Link href="#">
        <a>Pricing</a>
      </Link>
      <Link href="#">
        <a>About</a>
      </Link>
    </div>
  );
}
