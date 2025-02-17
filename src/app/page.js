"use client";
import styles from "./page.module.css";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    document.title = "Jerry's Thoughts";
  }, []);


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <b>Persistence</b>
        <ol>
          <li>What's on your mind?</li>
          <li>What does it mean to be persistent?</li>
        </ol>

        <div className={styles.ctas}>
          <Link className={styles.primary} href="/information">
            Learn More
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jerry-on-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jerry On
        </a>
      </footer>
    </div>
  );
}
