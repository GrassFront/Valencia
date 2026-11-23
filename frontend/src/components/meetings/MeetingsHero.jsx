import Link from "next/link";

export default function MeetingsHero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="meetings-hero" aria-label="Meetings Hero">
      {/* Dark left gradient overlay */}
      <div className="meetings-hero-overlay" />

      {/* Hero content */}
      <div className="meetings-hero-inner">
        {/* Breadcrumb */}
        <nav className="meetings-hero-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2 text-[#FAF7F0]/60">/</span>
          <span>Meetings &amp; Conferences</span>
        </nav>

        {/* Copy block */}
        <div className="meetings-hero-copy">
          <span className="meetings-hero-eyebrow">MEETINGS &amp; CONFERENCES</span>
          <h1 className="meetings-hero-heading">
            Space for ideas.<br />
            Room for progress.
          </h1>
          <p className="meetings-hero-desc">
            Bring your team together with meeting spaces at VALENCIA and Umrao in Patna.
          </p>
        </div>

        {/* Action buttons */}
        <div className="meetings-hero-actions">
          <a
            href="#meeting-enquiry"
            onClick={scrollTo("meeting-enquiry")}
            className="meetings-hero-btn-plan"
          >
            <span>PLAN YOUR MEETING</span>
            <span className="text-[24px] leading-none mb-0.5">→</span>
          </a>

          <a
            href="#spaces-to-connect"
            onClick={scrollTo("spaces-to-connect")}
            className="meetings-hero-btn-explore"
          >
            <span>EXPLORE SPACES</span>
            <span className="text-[24px] leading-none mb-0.5">↓</span>
          </a>
        </div>
      </div>

      {/* Concept imagery badge */}
      <span className="meetings-hero-badge">Concept imagery</span>
    </section>
  );
}
