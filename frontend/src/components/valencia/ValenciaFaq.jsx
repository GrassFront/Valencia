"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Send, X, Check } from "lucide-react";

const FAQ_DATA = [
  {
    id: 1,
    question: "Which room categories can I choose from?",
    answer:
      "Explore Deluxe, Twin, Suite and Presidential Suite. Visit Rooms & Suites to compare the options and find the right fit for your stay.",
    linkText: "Explore Rooms & Suites →",
    linkHref: "#rooms",
  },
  {
    id: 2,
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in begins at 2:00 PM, and check-out is at 11:00 AM. Should your schedule require alternate timings, our team will do our best to accommodate early arrival or late departure requests.",
  },
  {
    id: 3,
    question: "Is breakfast included in my stay?",
    answer:
      "Breakfast inclusions depend on your selected reservation rate. We offer comprehensive bed & breakfast packages featuring a lavish buffet of local and international delicacies served in our main dining salon.",
  },
  {
    id: 4,
    question: "Can I request an early check-in or late check-out?",
    answer:
      "Yes, early check-in and extended check-out are gladly arranged whenever room readiness and occupancy allow. Contact our concierge or front desk in advance of your arrival date.",
  },
  {
    id: 5,
    question: "What is the cancellation policy?",
    answer:
      "Standard flexible rates may be canceled without penalty up to 48 hours prior to your scheduled check-in. Non-refundable promotional bookings and event blocks have specialized terms noted at reservation.",
  },
  {
    id: 6,
    question: "How can I arrange a celebration or business meeting?",
    answer:
      "Our dedicated events and banqueting team provides end-to-end event planning at Magnolia Hall and The Executive Room. Simply reach out via our contact channels to receive personalized menus and floor plans.",
  },
];

export default function ValenciaFaq() {
  const [openId, setOpenId] = useState(1); // Item 1 open by default matching Figma
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full bg-[#FAF6EB] flex flex-col items-center py-12 lg:pt-[35px] lg:pb-[48px]">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="font-display font-bold text-[18px] sm:text-[21px] lg:text-[23px] leading-[29px] tracking-[4px] sm:tracking-[6px] text-[#BD9749] uppercase">
          BEFORE YOUR STAY
        </p>

        {/* Spacing 23px */}
        <div className="h-[14px] sm:h-[23px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[34px] sm:text-[46px] lg:text-[58px] leading-[1.1] lg:leading-[58px] text-[#164C36]">
          A little clarity, before you arrive.
        </h2>

        {/* Spacing 17px */}
        <div className="h-[10px] sm:h-[17px]" aria-hidden="true" />

        {/* Subtitle */}
        <p className="font-body font-normal text-[18px] sm:text-[21px] lg:text-[24px] leading-[28px] sm:leading-[34px] text-[#543E30]">
          Helpful answers to plan your time at VALENCIA.
        </p>

        {/* Spacing 47px */}
        <div className="h-[24px] sm:h-[47px]" aria-hidden="true" />

        {/* FAQ Accordion List (1240px on desktop) */}
        <div className="w-full max-w-[1240px] flex flex-col text-left">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`transition-all duration-200 ${
                  isOpen
                    ? "bg-[#F1E8D7] border-l-[4px] border-[#164C36] px-5 sm:px-8 lg:pl-[44px] lg:pr-[37px] pt-[19px] pb-[20px]"
                    : "border-b border-[#E1D2B3] px-5 sm:px-8 lg:px-[34px] py-4 lg:h-[77px] flex flex-col justify-center"
                }`}
              >
                {/* Question Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span
                    className={`font-body font-bold text-[18px] sm:text-[22px] lg:text-[25px] leading-[31px] text-[#543E30] ${
                      isOpen ? "lg:text-[26px] lg:leading-[33px]" : ""
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className="font-body font-normal text-[32px] sm:text-[40px] lg:text-[42px] leading-[1] text-[#164C36] shrink-0 select-none w-8 text-center"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded Answer Content */}
                {isOpen && (
                  <div className="mt-3.5 flex flex-col items-start animate-in fade-in duration-200">
                    <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[24px] sm:leading-[26px] text-[#543E30] max-w-[1110px]">
                      {item.answer}
                    </p>

                    {item.linkText && (
                      <div className="mt-3.5">
                        <a
                          href={item.linkHref}
                          className="font-body font-bold text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] text-[#164C36] underline hover:text-[#BD9749] transition-colors inline-block"
                        >
                          {item.linkText}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Spacing 39px */}
        <div className="h-[24px] sm:h-[39px]" aria-hidden="true" />

        {/* Still Have a Question Banner (width 1240px, height 97px) */}
        <div
          id="contact"
          className="w-full max-w-[1240px] min-h-[97px] rounded-[6px] bg-[#F1E8D7] p-5 sm:px-8 lg:pl-[40px] lg:pr-[30px] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-[30px] text-left shadow-sm"
        >
          <div className="flex items-center gap-5 sm:gap-[30px] w-full md:w-auto">
            {/* Chat Icon */}
            <div className="w-[48px] sm:w-[54px] h-[48px] sm:h-[54px] shrink-0 relative flex items-center justify-center">
              <Image
                src="/images/ValenciaPage/chatIcon.png"
                alt="Chat assistance"
                width={54}
                height={54}
                className="object-contain"
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-[58px] bg-[#BD9749] shrink-0" aria-hidden="true" />

            {/* Copy */}
            <div className="flex flex-col">
              <span className="font-display font-bold text-[22px] sm:text-[27px] lg:text-[31px] leading-[39px] text-[#543E30]">
                Still have a question?
              </span>
              <span className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] text-[#543E30]">
                Our team can help you plan your stay.
              </span>
            </div>
          </div>

          {/* CONTACT US Button */}
          <div className="w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-[240px] lg:w-[274px] h-[52px] sm:h-[59px] bg-[#164C36] hover:bg-[#113d2b] transition-all duration-300 rounded-[9px] flex items-center justify-center shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span className="font-display font-bold text-[19px] sm:text-[21px] lg:text-[23px] leading-[29px] text-[#FAF6EB] flex items-center gap-2.5">
                <span>CONTACT US</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {contactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[540px] bg-[#FAF6EB] rounded-2xl border border-[#BD9749] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 text-[#543E30] hover:text-[#164C36] p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
            >
              <X size={22} />
            </button>

            {contactSubmitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#164C36] text-[#E5C888] flex items-center justify-center mx-auto mb-4">
                  <Check size={28} />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#164C36] mb-2">
                  Message Sent
                </h3>
                <p className="font-body text-sm text-[#543E30] mb-6">
                  Thank you for reaching out to VALENCIA. Our guest services team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setContactModalOpen(false)}
                  className="px-6 py-2.5 bg-[#164C36] text-white font-body font-bold text-sm rounded-lg uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <p className="font-body text-xs font-bold tracking-[0.2em] text-[#BD9749] uppercase">
                  GUEST ASSISTANCE
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#164C36] mt-1 mb-2">
                  Contact Our Concierge
                </h3>
                <p className="font-body text-sm text-[#543E30] mb-5">
                  Have questions about your stay, private dining, or events? Send us a message and we will respond promptly.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-4 text-left"
                >
                  <div>
                    <label className="block text-xs font-body font-bold text-[#543E30] uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full p-2.5 bg-white border border-[#BD9749]/50 rounded-lg text-sm text-[#543E30] focus:outline-[#164C36]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-bold text-[#543E30] uppercase mb-1">
                      Email Address / Phone
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="contact@example.com or +91"
                      className="w-full p-2.5 bg-white border border-[#BD9749]/50 rounded-lg text-sm text-[#543E30] focus:outline-[#164C36]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-bold text-[#543E30] uppercase mb-1">
                      Enquiry Topic
                    </label>
                    <select className="w-full p-2.5 bg-white border border-[#BD9749]/50 rounded-lg text-sm text-[#543E30] focus:outline-[#164C36]">
                      <option>Room Reservations &amp; Suites</option>
                      <option>Dining &amp; Chef Michael</option>
                      <option>Weddings &amp; Celebrations (Magnolia Hall)</option>
                      <option>Meetings &amp; Corporate Conferences</option>
                      <option>Directions &amp; Airport Transfers</option>
                      <option>Other Enquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-bold text-[#543E30] uppercase mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="How can we assist you with your stay at Valencia?"
                      className="w-full p-2.5 bg-white border border-[#BD9749]/50 rounded-lg text-sm text-[#543E30] focus:outline-[#164C36]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#164C36] hover:bg-[#113d2b] text-white font-body font-bold text-sm tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
