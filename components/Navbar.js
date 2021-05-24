import React from "react";
import styles from "/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
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
