import Link from "next/link";

export default function AuthFooter({ className = "" }) {
  return (
    <footer
      className={`w-full py-4 text-center font-body text-[12px] leading-[16px] text-[#969390] shrink-0 ${className}`}
    >
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        <span>© 2026 VALENCIA</span>
        <span>|</span>
        <Link
          href="#privacy"
          className="hover:text-[#655B51] transition-colors underline-offset-2 hover:underline"
        >
          Privacy Policy
        </Link>
        <span>|</span>
        <Link
          href="#terms"
          className="hover:text-[#655B51] transition-colors underline-offset-2 hover:underline"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}

