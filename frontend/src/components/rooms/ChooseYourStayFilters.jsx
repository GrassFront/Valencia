"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./css/choose-your-stay-filters.css";

const CATEGORIES = [
  { id: "all", label: "All Rooms", widthClass: "tab-all-rooms" },
  { id: "deluxe", label: "Deluxe", widthClass: "tab-deluxe" },
  { id: "twin", label: "Twin", widthClass: "tab-twin" },
  { id: "suite", label: "Suite", widthClass: "tab-suite" },
  { id: "presidential-suite", label: "Presidential Suite", widthClass: "tab-presidential-suite" },
];

const GUEST_OPTIONS = ["Any occupancy", "1 Guest", "2 Guests", "3+ Guests"];
const PRICE_OPTIONS = ["All rates", "Under ₹6,000", "₹6,000 - ₹12,000", "Above ₹12,000"];
const SORT_OPTIONS = ["Recommended", "Price: Low to High", "Price: High to Low"];

export default function ChooseYourStayFilters({
  activeCategory = "all",
  onCategoryChange,
  onFilterChange,
}) {
  const [internalCategory, setInternalCategory] = useState(activeCategory);
  const selectedCategory = activeCategory !== undefined ? activeCategory : internalCategory;

  const [selectedGuests, setSelectedGuests] = useState("Any occupancy");
  const [selectedPrice, setSelectedPrice] = useState("All rates");
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const [openDropdown, setOpenDropdown] = useState(null); // 'guests' | 'price' | 'sort' | null
  const containerRef = useRef(null);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Smooth scroll into view when arriving via Search Rooms
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shouldScroll =
        window.location.hash === "#choose-your-stay" ||
        window.location.search.includes("search=1");
      if (shouldScroll) {
        const timer = setTimeout(() => {
          const el = document.getElementById("choose-your-stay");
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleCategoryClick = (catId) => {
    setInternalCategory(catId);
    if (onCategoryChange) onCategoryChange(catId);
  };

  const handleSelectOption = (type, val) => {
    if (type === "guests") {
      setSelectedGuests(val);
      if (onFilterChange) onFilterChange({ guests: val });
    } else if (type === "price") {
      setSelectedPrice(val);
      if (onFilterChange) onFilterChange({ price: val });
    } else if (type === "sort") {
      setSelectedSort(val);
      if (onFilterChange) onFilterChange({ sort: val });
    }
    setOpenDropdown(null);
  };

  return (
    <section
      id="choose-your-stay"
      ref={containerRef}
      aria-label="Choose your stay and filter rooms"
      className="choose-your-stay-filters scroll-mt-[100px]"
    >
      <div className="choose-your-stay-container">
        {/* Section Heading Row */}
        <div className="section-heading">
          <h2 className="choose-your-stay">Choose your stay</h2>
          <p className="layer-4-room-categories">4 room categories</p>
        </div>

        {/* Subtitle */}
        <p className="explore-our-four-room-categories">
          Explore our four room categories.
        </p>

        {/* Room Categories Tabs and Dropdown Filters */}
        <div className="room-categories-and-filters">
          {/* Left: Category Tabs */}
          <div className="room-category-tabs" role="tablist" aria-label="Room categories">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`category-tab-btn ${cat.widthClass} ${
                    isActive ? "category-tab-active" : "category-tab-inactive"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right: Dropdown Filters (Guests, Price, Sort by) */}
          <div className="occupancy-price-sorting">
            {/* 1. Guests Dropdown */}
            <div className="filter-dropdown-group filter-guests-group">
              <label htmlFor="filter-guests" className="filter-group-label">
                Guests
              </label>
              <button
                id="filter-guests"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={openDropdown === "guests"}
                onClick={() =>
                  setOpenDropdown((prev) => (prev === "guests" ? null : "guests"))
                }
                className={`filter-select-trigger filter-guests-trigger ${
                  openDropdown === "guests" ? "filter-select-trigger-active" : ""
                }`}
              >
                <span className="filter-select-value">{selectedGuests}</span>
                <ChevronDown
                  size={16}
                  className={`filter-chevron-icon ${
                    openDropdown === "guests" ? "filter-chevron-open" : ""
                  }`}
                />
              </button>

              {openDropdown === "guests" && (
                <ul className="filter-menu-popup" role="listbox">
                  {GUEST_OPTIONS.map((opt) => (
                    <li
                      key={opt}
                      role="option"
                      aria-selected={selectedGuests === opt}
                      onClick={() => handleSelectOption("guests", opt)}
                      className={`filter-menu-item ${
                        selectedGuests === opt ? "filter-menu-item-selected" : ""
                      }`}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 2. Price Dropdown */}
            <div className="filter-dropdown-group filter-price-group">
              <label htmlFor="filter-price" className="filter-group-label">
                Price
              </label>
              <button
                id="filter-price"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={openDropdown === "price"}
                onClick={() =>
                  setOpenDropdown((prev) => (prev === "price" ? null : "price"))
                }
                className={`filter-select-trigger filter-price-trigger ${
                  openDropdown === "price" ? "filter-select-trigger-active" : ""
                }`}
              >
                <span className="filter-select-value">{selectedPrice}</span>
                <ChevronDown
                  size={16}
                  className={`filter-chevron-icon ${
                    openDropdown === "price" ? "filter-chevron-open" : ""
                  }`}
                />
              </button>

              {openDropdown === "price" && (
                <ul className="filter-menu-popup" role="listbox">
                  {PRICE_OPTIONS.map((opt) => (
                    <li
                      key={opt}
                      role="option"
                      aria-selected={selectedPrice === opt}
                      onClick={() => handleSelectOption("price", opt)}
                      className={`filter-menu-item ${
                        selectedPrice === opt ? "filter-menu-item-selected" : ""
                      }`}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 3. Sort By Dropdown */}
            <div className="filter-dropdown-group filter-sort-group">
              <label htmlFor="filter-sort" className="filter-group-label">
                Sort by
              </label>
              <button
                id="filter-sort"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={openDropdown === "sort"}
                onClick={() =>
                  setOpenDropdown((prev) => (prev === "sort" ? null : "sort"))
                }
                className={`filter-select-trigger filter-sort-trigger ${
                  openDropdown === "sort" ? "filter-select-trigger-active" : ""
                }`}
              >
                <span className="filter-select-value">{selectedSort}</span>
                <ChevronDown
                  size={16}
                  className={`filter-chevron-icon ${
                    openDropdown === "sort" ? "filter-chevron-open" : ""
                  }`}
                />
              </button>

              {openDropdown === "sort" && (
                <ul className="filter-menu-popup" role="listbox">
                  {SORT_OPTIONS.map((opt) => (
                    <li
                      key={opt}
                      role="option"
                      aria-selected={selectedSort === opt}
                      onClick={() => handleSelectOption("sort", opt)}
                      className={`filter-menu-item ${
                        selectedSort === opt ? "filter-menu-item-selected" : ""
                      }`}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Hairline Divider */}
        <div className="rectangle-divider" aria-hidden="true" />
      </div>
    </section>
  );
}
