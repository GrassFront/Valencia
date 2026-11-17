"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import { ChevronDown, Check } from "lucide-react";
import { classNames } from "../../lib/classNames";

export default function BrandSelect({
  id,
  name,
  value = "",
  onChange,
  placeholder = "Select an option",
  options = [],
  label,
  required = false,
  disabled = false,
  error = "",
  className = "",
  triggerClassName = "",
  menuClassName = "",
}) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const listboxId = `${selectId}-listbox`;

  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const listboxRef = useRef(null);

  // Normalize options into objects with { value, label }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "object" && opt !== null) {
      return {
        value: String(opt.value ?? opt.label),
        label: String(opt.label ?? opt.value),
        description: opt.description || null,
      };
    }
    return {
      value: String(opt),
      label: String(opt),
      description: null,
    };
  });

  const selectedOption = normalizedOptions.find(
    (opt) => String(opt.value) === String(value)
  );

  // Close dropdown on outside click
  const handleOutsideClick = useCallback((e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listboxRef.current) {
      const items = listboxRef.current.querySelectorAll('[role="option"]');
      if (items[highlightedIndex]) {
        items[highlightedIndex].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (optionValue) => {
    if (disabled) return;
    if (onChange) {
      // Fire synthetic change event matching standard form handlers
      const event = {
        target: {
          name: name || selectId,
          value: optionValue,
        },
      };
      onChange(event);
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setIsOpen(true);
        const currentIndex = normalizedOptions.findIndex(
          (opt) => String(opt.value) === String(value)
        );
        setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < normalizedOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : normalizedOptions.length - 1
        );
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (highlightedIndex >= 0 && normalizedOptions[highlightedIndex]) {
          handleSelect(normalizedOptions[highlightedIndex].value);
        }
        break;
      case "Escape":
      case "Tab":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={classNames("relative w-full flex flex-col items-start", className)}
    >
      {label && (
        <label
          htmlFor={selectId}
          className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
        >
          {label}
        </label>
      )}

      {/* Hidden input to support standard form serialization */}
      <input
        type="hidden"
        id={selectId}
        name={name || selectId}
        value={value}
        required={required}
      />

      {/* Styled Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-label={label || placeholder}
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            setIsOpen((prev) => !prev);
            if (!isOpen) {
              const currentIndex = normalizedOptions.findIndex(
                (opt) => String(opt.value) === String(value)
              );
              setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
            }
          }
        }}
        onKeyDown={handleKeyDown}
        className={classNames(
          "w-full h-[48px] rounded-[8px] px-4 sm:px-[21px] flex items-center justify-between umrao-input bg-[#FCFAF6] cursor-pointer group text-left transition-all",
          "focus:outline-none focus:ring-2 focus:ring-[#194E35]/20 focus:border-[#194E35]",
          isOpen && "border-[#194E35] ring-2 ring-[#194E35]/20 shadow-xs",
          disabled && "opacity-50 cursor-not-allowed",
          triggerClassName
        )}
      >
        <span
          className={classNames(
            "font-body text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] truncate select-none",
            selectedOption ? "text-[#503522] font-medium" : "text-[#776B61]"
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <div className="shrink-0 ml-3 text-[#655344] group-hover:text-[#194E35] transition-colors pointer-events-none">
          <ChevronDown
            size={18}
            className={classNames(
              "stroke-[2] transition-transform duration-200",
              isOpen && "rotate-180 text-[#194E35]"
            )}
          />
        </div>
      </button>

      {/* Branded Luxury Dropdown Menu */}
      {isOpen && (
        <div
          ref={listboxRef}
          role="listbox"
          id={listboxId}
          aria-label={label || placeholder}
          className={classNames(
            "absolute top-[calc(100%+6px)] left-0 right-0 z-50 rounded-[14px] border border-[#E8DCC9] bg-[#FBF5EA] p-1.5 shadow-[0_16px_40px_rgba(84,53,34,0.14)] animate-in fade-in zoom-in-95 duration-150 max-h-[280px] overflow-y-auto",
            menuClassName
          )}
        >
          {normalizedOptions.map((opt, index) => {
            const isSelected = String(opt.value) === String(value);
            const isHighlighted = index === highlightedIndex;

            return (
              <div
                key={`${opt.value}-${index}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={classNames(
                  "px-3.5 sm:px-4 py-2.5 rounded-[8px] flex items-center justify-between text-left cursor-pointer transition-colors font-body text-[15px] sm:text-[17px] leading-[22px]",
                  isSelected
                    ? "bg-[#194E35] text-[#FAF6EC] font-semibold shadow-2xs"
                    : isHighlighted
                    ? "bg-[#F3EAD9] text-[#194E35] font-medium"
                    : "text-[#503522] hover:bg-[#F3EAD9] hover:text-[#194E35]"
                )}
              >
                <div className="flex flex-col min-w-0 pr-2">
                  <span className="truncate">{opt.label}</span>
                  {opt.description && (
                    <span
                      className={classNames(
                        "text-[12px] leading-tight truncate mt-0.5",
                        isSelected ? "text-[#FAF6EC]/80" : "text-[#776B61]"
                      )}
                    >
                      {opt.description}
                    </span>
                  )}
                </div>

                {isSelected && (
                  <Check
                    size={16}
                    className="text-[#C8A153] stroke-[2.5] shrink-0 ml-2"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {error && (
        <p className="mt-1 text-[13px] text-red-600 font-body">{error}</p>
      )}
    </div>
  );
}
