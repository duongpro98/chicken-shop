import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import KnowMore from "@/components/KnowMore";

export default function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <Banner/>
        </div>
        <Products/>
        <KnowMore/>
    </div>
  )
}
