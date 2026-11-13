export default function InstructionBox({
  title = "Open the email and follow the link to create a new password.",
  subtitle = "Can’t find it? Check your spam or junk folder.",
  className = "",
}) {
  return (
    <div
      className={`w-full max-w-[552px] min-h-[120px] sm:min-h-[133px] bg-[#F3ECDF] rounded-[8px] p-5 sm:py-[24px] sm:px-[28px] flex items-start gap-4 sm:gap-[24px] ${className}`}
    >
      {/* Document Icon (Frame 45x45) */}
      <div className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] shrink-0 text-[#B78E5B] pt-0.5">
        <svg
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Folded paper outline */}
          <path
            d="M12 8H26L33 15V37C33 38.1046 32.1046 39 31 39H12C10.8954 39 10 38.1046 10 37V10C10 8.89543 10.8954 8 12 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Fold corner */}
          <path
            d="M26 8V15H33"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Text lines */}
          <line
            x1="15"
            y1="23"
            x2="28"
            y2="23"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="28"
            x2="25"
            y2="28"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-2 sm:gap-[12px] flex-1">
        <p className="font-body text-[17px] sm:text-[20px] lg:text-[21px] leading-[25px] sm:leading-[29px] text-[#655B51]">
          {title}
        </p>
        <p className="font-body text-[15px] sm:text-[17px] leading-[21px] sm:leading-[23px] text-[#655B51]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

