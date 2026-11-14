import FooterBrand from "./FooterBrand";
import FooterExplore from "./FooterExplore";
import FooterProperties from "./FooterProperties";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#4B3523] text-[#FAF4EB] overflow-hidden"
    >
      {/* Decorative subtle top hairline */}
      <div className="w-full h-[1px] bg-[#C9A96A]/15" />

      {/* Main Content Container */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-5 sm:pt-6 lg:pt-6 pb-2.5">
        {/* 3 Columns with Vertical Dividers on Desktop */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
          {/* Left Column: Brand, Tagline, Socials (~40% on desktop) */}
          <div className="w-full lg:w-[40%] lg:pr-10 xl:pr-14 flex flex-col items-center justify-start">
            <FooterBrand />
          </div>

          {/* Vertical Divider 1 */}
          <div
            className="hidden lg:block w-[1px] bg-[#C9A96A]/25 shrink-0 self-stretch my-1"
            aria-hidden="true"
          />

          {/* Middle Column: Explore Navigation (~20% on desktop) */}
          <div className="w-full lg:w-[20%] lg:px-8 xl:px-12 flex flex-col justify-start">
            <FooterExplore />
          </div>

          {/* Vertical Divider 2 */}
          <div
            className="hidden lg:block w-[1px] bg-[#C9A96A]/25 shrink-0 self-stretch my-1"
            aria-hidden="true"
          />

          {/* Right Column: Our Properties (~40% on desktop) */}
          <div className="w-full lg:w-[40%] lg:pl-10 xl:pl-14 flex flex-col justify-start">
            <FooterProperties />
          </div>
        </div>

        {/* Bottom Legal / Copyright / Back to Top Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}
