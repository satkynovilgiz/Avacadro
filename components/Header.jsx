"use client";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <span>Educational Platform</span>
        </div>
      </div>
    </header>
  );
}
