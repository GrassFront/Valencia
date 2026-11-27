import Image from "next/image";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <>
      <header className="w-full h-[76px] sm:h-[87px] flex items-center justify-between gap-2 px-4 sm:px-10 lg:px-12 xl:px-16 bg-[#F9F6ED] shrink-0 border-b border-[#DFDDD5]/30">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-[14px] min-w-0 transition-opacity hover:opacity-90"
          aria-label="Valencia - Return to Homepage"
        >
          <div className="relative w-[clamp(132px,44vw,210px)] sm:w-[240px] lg:w-[265px] h-[38px] sm:h-[54px] lg:h-[58px]">
            <Image
              src="/images/logo/valencia-logo.png"
              alt="Valencia"
              fill
              priority
              sizes="(max-width: 640px) 180px, 265px"
              className="object-contain object-left"
            />
          </div>
        </Link>
      </header>

      <div className="w-full px-4 sm:px-10 lg:px-12 xl:px-16 py-2.5 bg-[#F9F6ED] border-b border-[#DFDDD5]/30 flex justify-end shrink-0">
        <Link
          href="/"
          className="font-body text-[14px] sm:text-[16px] lg:text-[17px] leading-[22px] underline text-[#164C3B] hover:text-[#1B4D32] transition-colors whitespace-nowrap"
        >
          ← <span className="md:hidden">Back</span><span className="hidden md:inline">Back to home</span>
        </Link>
      </div>
    </>
  );
}

