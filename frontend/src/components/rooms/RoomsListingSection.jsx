"use client";

import { useState } from "react";
import ChooseYourStayFilters from "./ChooseYourStayFilters";
import RoomCategoriesAlternativeRatesAndAmenities from "./RoomCategoriesAlternativeRatesAndAmenities";

export default function RoomsListingSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div id="choose-your-stay-section" className="rooms-listing-wrapper flex flex-col w-full scroll-mt-[100px]">
      {/* 1. Category Tabs & Filters */}
      <ChooseYourStayFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 2. Room Cards 2x2 Grid with Amenities & Rates */}
      <RoomCategoriesAlternativeRatesAndAmenities
        filterCategory={activeCategory}
      />
    </div>
  );
}
