"use client";

export default function SocialLogin({
  onGoogleClick,
  onAppleClick,
  className = "",
}) {
  return (
    <div className={`w-full max-w-[552px] flex flex-col gap-3 ${className}`}>
      <div className="relative flex items-center justify-center my-2">
        <div className="w-full border-t border-[#DFDDD5]" />
        <span className="bg-[#F9F6ED] px-4 font-body text-[14px] text-[#969390]">
          or continue with
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onGoogleClick}
          className="h-[48px] rounded-[6px] border border-[#D5D5D5] bg-[#FCFBF9] hover:bg-[#F3ECDF] transition-colors flex items-center justify-center gap-2 font-body text-[15px] text-[#514B46]"
        >
          <span>Google</span>
        </button>
        <button
          type="button"
          onClick={onAppleClick}
          className="h-[48px] rounded-[6px] border border-[#D5D5D5] bg-[#FCFBF9] hover:bg-[#F3ECDF] transition-colors flex items-center justify-center gap-2 font-body text-[15px] text-[#514B46]"
        >
          <span>Apple</span>
        </button>
      </div>
    </div>
  );
}

