import AuthFooter from "./AuthFooter";

export default function AuthCard({
  recoveryIcon = null,
  eyebrow,
  title,
  subtitle,
  children,
  topPaddingClass = "pt-8 lg:pt-[50px]",
  className = "",
}) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between items-center px-5 sm:px-10 lg:px-8 xl:px-12 ${topPaddingClass} pb-6 ${className}`}
    >
      <div className="w-full max-w-[552px] flex flex-col items-start flex-1">
        {/* Recovery Icon */}
        {recoveryIcon && (
          <div className="mb-[28px]">{recoveryIcon}</div>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p className="font-body text-[14px] sm:text-[16px] leading-[22px] tracking-[1.4px] font-normal uppercase text-[#B58D57] mb-[9px]">
            {eyebrow}
          </p>
        )}

        {/* Title */}
        {title && (
          <h1 className="font-display text-[34px] sm:text-[46px] lg:text-[57px] leading-[42px] sm:leading-[58px] lg:leading-[74px] font-normal text-[#164C3B] mb-2 sm:mb-[10px]">
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="font-body text-[16px] sm:text-[19px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[31px] text-[#655B51] mb-6 sm:mb-[30px] lg:mb-[36px]">
            {subtitle}
          </p>
        )}

        {/* Card Body / Form */}
        <div className="w-full flex flex-col items-start">{children}</div>
      </div>

      {/* Footer copyright */}
      <AuthFooter className="mt-8" />
    </div>
  );
}

