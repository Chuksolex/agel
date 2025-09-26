import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "../components/homeSlider/HomeSlider";
import ProductCategories from "@/components/categorySlider/CategorySlider"; 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeSlider />

        <div className={styles.header}>
          <h1 className={styles.title}>Agel - All In One Solar Energy Solution</h1>
       </div>
       <div className="d-flex justify-content-center align-items-center mb-2 mt-4">
          <img width="100" height="100" className="margin-0" src="/images/agellogononame.png" alt="agel symbol" ></img> 
        <h2 className={`align-items-center ${styles.subtitle}`}>   <span className="text-secondary">PRODUCT</span> <span  className="text-warning">CATEGORIES</span></h2>
       </div>
       <p className="text-md-center mx-4 fw-bold fs-5 text-primary">Select a product class to see more about our solar energy product offerings:</p>
                <ProductCategories /> 

          

        </main>
    </div>
  );
}
