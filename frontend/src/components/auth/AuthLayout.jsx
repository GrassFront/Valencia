import Image from "next/image";
import AuthHeader from "./AuthHeader";

export default function AuthLayout({
  children,
  lobbyCaption = "A warm welcome, always.",
}) {
  return (
    <div className="min-h-screen w-full bg-[#F9F6ED] flex flex-col selection:bg-[#164C3B] selection:text-white">
      {/* Full-bleed split layout container */}
      <div className="w-full min-h-screen flex flex-col">
        {/* Navigation Header (87px) */}
        <AuthHeader />

        {/* Main Content: Split Row (Photo on Left edge-to-edge, Account Panel on Right) */}
        <main className="flex-1 flex flex-col lg:flex-row w-full relative">
          {/* Left Column: Lobby photograph and message - spans full 50% without gutter gap */}
          <section
            aria-label="Hotel ambiance and welcome"
            className="w-full lg:w-1/2 h-[300px] sm:h-[380px] lg:h-auto lg:min-h-[calc(100vh-87px)] relative shrink-0 overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/authenticate_left.png"
                alt="Valencia Luxury Boutique Hotel Lobby"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Caption backdrop with exact Figma gradient */}
            <div
              className="absolute inset-x-0 bottom-0 h-[220px] sm:h-[270px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20, 13, 5, 0) 0%, rgba(20, 13, 5, 0.94) 100%)",
              }}
            />

            {/* Photo caption */}
            <div className="absolute bottom-[24px] sm:bottom-[32px] lg:bottom-[45px] left-[24px] sm:left-[45px] lg:left-[61px] right-[24px] max-w-[620px] flex flex-col gap-[12px] sm:gap-[16px] z-10">
              <h2 className="font-display font-normal text-[32px] sm:text-[44px] lg:text-[55px] leading-[38px] sm:leading-[50px] lg:leading-[62px] text-white tracking-normal">
                {lobbyCaption}
              </h2>
              <span className="font-body font-normal text-[12px] sm:text-[14px] leading-[19px] tracking-[3px] text-[#BDB7AE] uppercase">
                CONCEPT IMAGE
              </span>
            </div>
          </section>

          {/* Right Column: Account Panel Form */}
          <section
            aria-label="Account form and options"
            className="w-full lg:w-1/2 flex-1 bg-[#F9F6ED] flex flex-col justify-center relative"
          >
            {children}
          </section>
        </main>
      </div>
    </div>
  );
}

