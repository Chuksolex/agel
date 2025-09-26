"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./CategorySlider.module.css";

const categories = [
  {
    title: "EV Chargers",
    image: "/images/icons/charging-station.png",
    link: "/products/ev-chargers",
  },
  {
    title: "Electrical",
    image: "/images/icons/energy-storage.png",
    link: "/products/electrical",
  },
  {
    title: "Solar Inverters",
    image: "/images/icons/solar-panel.png",
    link: "/products/solar-inverters",
  },
  {
    title: "Solar Racking",
    image: "/images/icons/factory.png",
    link: "/products/solar-racking",
  },
  {
    title: "Energy Storage",
    image: "/images/icons/accumulator-battery.png",
    link: "/categories/energy-storage",
  },
  {
    title: "Mini Grid",
    image: "/images/icons/solar-energy.png",
    link: "/categories/mini-grid",
  },
];

export default function ProductCategories() {
  return (
    <section className="container my-2">
      <div className="row g-4">
        {categories.map((cat, index) => (
          <div key={index} className="col-6 col-md-3 col-lg-2">
            <Link href={cat.link} className="text-decoration-none">
              <div className="card h-100 border-0 shadow-sm text-center bg-light">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={250}
                  height={200}
                  className="card-img-top object-fit-contain"
                />
                <div className="card-body">
                  <h5 className="card-title">{cat.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
