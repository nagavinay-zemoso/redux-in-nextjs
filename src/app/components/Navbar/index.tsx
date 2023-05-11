"use client";

import React from "react";
import styles from "../../page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/increment">Increment</Link>
      <Link href="/decrement">Decrement</Link>
      <Link href="/incrementByAmount">IncrementByAmount</Link>
    </div>
  );
};

export default Navbar;
