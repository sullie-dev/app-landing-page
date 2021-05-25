import React from "react";
import styles from "/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src="/money_icon.png" alt="App Icon" width={50} height={50} />
      </div>
      <div className={styles.Navbar}>
        <Link href="/features">
          <a>Features</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
        <Link href="/">
          <a>Sign up</a>
        </Link>
      </div>
    </div>
  );
}
