import React from "react";
import Link from "next/link";

export default function AccountBreadcrumb({ isProfile = false, currentSubpage = "" }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <div className="w-full flex h-[57px] items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <ol className="flex items-center gap-1.5 font-body text-[14px] leading-[19px] text-[#565653]">
          <li>
            <Link href="/" className="hover:text-[#134D39] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            {isProfile || currentSubpage ? (
              <Link href="/account" className="hover:text-[#134D39] transition-colors">
                My account
              </Link>
            ) : (
              <span className="text-[#565653]">My account</span>
            )}
          </li>
          {isProfile && (
            <>
              <li aria-hidden="true">/</li>
              <li className="text-[#565653]">My profile</li>
            </>
          )}
          {!isProfile && currentSubpage && (
            <>
              <li aria-hidden="true">/</li>
              <li className="text-[#565653] capitalize">{currentSubpage}</li>
            </>
          )}
        </ol>
      </div>
    </nav>
  );
}
