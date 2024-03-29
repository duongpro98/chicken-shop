import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>CHICKEN DREAM</div>
            <div className={styles.itemContainer}>
                <Link href="/" className={styles.item}>
                        Home
                </Link>
                <div className={styles.item}>Contact</div>
                <div className={styles.item}>About us</div>
                <div className={styles.item}>Shop</div>
            </div>
        </div>
    )
}

export default Header;