"use client";

import Image from "next/image";
import { ArrowRightIcon } from "./DiningIcons";

const MENU_HIGHLIGHTS = [
  {
    category: "FROM THE TANDOOR",
    name: "Paneer Tikka",
    desc: "Charred paneer, warming spices and fresh mint chutney.",
    image: "/images/DiningPage/Taste at Valencia/Paneer Tikka/Native photo crop.png",
    alt: "Paneer Tikka - Charred paneer with warming spices and mint chutney",
  },
  {
    category: "COMFORT CLASSICS",
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils with a rich, creamy finish.",
    image: "/images/DiningPage/Taste at Valencia/Dal Makhani/Native photo crop.png",
    alt: "Dal Makhani - Slow-cooked black lentils in traditional copper bowl",
  },
  {
    category: "AROMATIC FAVOURITES",
    name: "Vegetable Biryani",
    desc: "Fragrant basmati rice layered with vegetables and spices.",
    image: "/images/DiningPage/Taste at Valencia/Vegetable Biryani/Native photo crop.png",
    alt: "Vegetable Biryani - Fragrant basmati rice layered with vegetables and spices",
  },
  {
    category: "SWEET FINISHES",
    name: "Saffron Rasmalai",
    desc: "Soft dumplings in saffron milk, finished with pistachios.",
    image: "/images/DiningPage/Taste at Valencia/Saffron Rasmalai/Native photo crop.png",
    alt: "Saffron Rasmalai - Soft dumplings in saffron milk garnished with pistachios",
  },
];

export default function DiningTaste() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="dining-taste-section"
      id="menu-highlights"
      aria-label="A Taste of Valencia - Menu Highlights"
    >
      <div className="dining-taste-container">
        {/* Top Header Row */}
        <div className="dining-taste-header">
          <div className="dining-taste-intro">
            <p className="dining-taste-eyebrow">A TASTE OF VALENCIA</p>
            <span className="dining-taste-mobile-rule" aria-hidden="true" />
            <h2 className="dining-taste-title">Discover your next favourite.</h2>
            <p className="dining-taste-subtitle">
              A glimpse of the flavours that could make your visit memorable.
            </p>
          </div>

          <a
            href="#reservation"
            onClick={scrollTo("reservation")}
            className="btn-taste-reserve"
            aria-label="Reserve a table for menu tasting"
          >
            <span>RESERVE A TABLE</span>
            <ArrowRightIcon className="w-[16px] h-[16px] ml-2 hidden md:inline-block" strokeWidth={1.8} />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="dining-taste-cards-grid">
          {MENU_HIGHLIGHTS.map((dish) => (
            <article key={dish.name} className="dining-taste-card">
              <div className="dining-taste-card-img">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  width={322}
                  height={255}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="dining-taste-card-body">
                <span className="dining-taste-card-category">{dish.category}</span>
                <h3 className="dining-taste-card-name">{dish.name}</h3>
                <p className="dining-taste-card-desc">{dish.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="dining-taste-notice">
          <hr className="dining-taste-notice-rule" />
          <p className="dining-taste-notice-text">
            Sample menu concepts and imagery. Final dishes subject to confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
