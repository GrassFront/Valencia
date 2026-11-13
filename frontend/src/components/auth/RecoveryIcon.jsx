export default function RecoveryIcon({ type = "key", className = "" }) {
  return (
    <div
      className={`w-[80px] h-[80px] rounded-full bg-[#F3ECDF] flex items-center justify-center shrink-0 ${className}`}
      aria-hidden="true"
    >
      {type === "key" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-[#B78E5B]"
        >
          {/* Circular key head at top-right */}
          <circle
            cx="27"
            cy="13"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Key shaft pointing to bottom-left */}
          <line
            x1="22.7"
            y1="17.3"
            x2="10"
            y2="30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Key bit/teeth */}
          <line
            x1="12"
            y1="28"
            x2="14"
            y2="30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="25"
            x2="18.5"
            y2="28.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "mail" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-[#B78E5B]"
        >
          {/* Envelope body */}
          <rect
            x="6"
            y="10"
            width="28"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Envelope flap */}
          <path
            d="M6.5 11L20 21L33.5 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {type === "lock" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-[#B78E5B]"
        >
          {/* Padlock body */}
          <rect
            x="9"
            y="17"
            width="22"
            height="15"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Shackle */}
          <path
            d="M14 17V12C14 8.68629 16.6863 6 20 6V6C23.3137 6 26 8.68629 26 12V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Keyhole dot */}
          <circle cx="20" cy="24" r="1.5" fill="currentColor" />
        </svg>
      )}
    </div>
  );
}

