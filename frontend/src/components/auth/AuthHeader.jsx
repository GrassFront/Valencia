import Image from "next/image";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <header className="w-full h-[87px] flex items-center justify-between px-6 sm:px-10 lg:pl-[40px] lg:pr-[45px] bg-[#F9F6ED] shrink-0 border-b border-[#DFDDD5]/30">
      <Link
        href="/"
        className="flex items-center gap-[14px] transition-opacity hover:opacity-90"
        aria-label="Valencia - Return to Homepage"
      >
        <div className="relative w-[210px] sm:w-[240px] lg:w-[265px] h-[48px] sm:h-[54px] lg:h-[58px]">
          <Image
            src="/images/logo/valencia-logo.png"
            alt="Valencia"
            fill
            priority
            sizes="265px"
            className="object-contain object-left"
          />
        </div>
      </Link>

      <Link
        href="/"
        className="font-body text-[16px] sm:text-[18px] lg:text-[19px] leading-[26px] underline text-[#164C3B] hover:text-[#1B4D32] transition-colors"
      >
        ← Back to home
      </Link>
    </header>
  );
}

