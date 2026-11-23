import Image from "next/image";

export default function MeetingsBeyond() {
  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const el = document.getElementById("meeting-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="meetings-beyond" aria-label="Beyond the Meeting Room">
      <div className="meetings-beyond-inner">
        {/* Left column */}
        <div className="meetings-beyond-left">
          <div>
            <span className="meetings-beyond-eyebrow">BEYOND THE MEETING ROOM</span>
            <h2 className="meetings-beyond-heading">
              Meet well. Stay comfortably.<br />
              Dine together.
            </h2>
            <p className="meetings-beyond-desc">
              Bring meeting spaces, guest accommodation and dining into one considered plan for your team’s time in Patna.
            </p>
          </div>

          <div className="meetings-beyond-benefits">
            {/* Benefit 1 */}
            <div className="meetings-beyond-benefit">
              <div className="meetings-beyond-benefit-icon">
                <Image
                  src="/images/MeetingsPage/Beyond Meeting Room/Stay icon holder.svg"
                  alt="A comfortable stay icon"
                  width={62}
                  height={62}
                  className="w-[62px] h-[62px]"
                />
              </div>
              <div className="meetings-beyond-benefit-copy">
                <h3 className="meetings-beyond-benefit-title">A comfortable stay</h3>
                <p className="meetings-beyond-benefit-detail">
                  Explore room options for travelling delegates.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="meetings-beyond-benefit">
              <div className="meetings-beyond-benefit-icon">
                <Image
                  src="/images/MeetingsPage/Beyond Meeting Room/Dining icon holder.svg"
                  alt="Time around the table icon"
                  width={62}
                  height={62}
                  className="w-[62px] h-[62px]"
                />
              </div>
              <div className="meetings-beyond-benefit-copy">
                <h3 className="meetings-beyond-benefit-title">Time around the table</h3>
                <p className="meetings-beyond-benefit-detail">
                  Discuss refreshments, meals and team dining.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#meeting-enquiry"
            onClick={scrollToEnquiry}
            className="meetings-beyond-btn"
          >
            <span>PLAN YOUR STAY &amp; MEETING</span>
            <span className="text-[20px] leading-none mb-0.5 ml-2">→</span>
          </a>
        </div>

        {/* Right column: stacked photos */}
        <div className="meetings-beyond-right">
          <Image
            src="/images/MeetingsPage/Beyond Meeting Room/Guest room/Native crop.png"
            alt="Guest room accommodation"
            width={655}
            height={283}
            className="meetings-beyond-img-1"
          />
          <Image
            src="/images/MeetingsPage/Beyond Meeting Room/Team dining/Native crop.png"
            alt="Team dining experience"
            width={655}
            height={230}
            className="meetings-beyond-img-2"
          />
        </div>
      </div>
    </section>
  );
}
