import MeetingsHero from "./MeetingsHero";
import MeetingsSpaces from "./MeetingsSpaces";
import MeetingsFacilities from "./MeetingsFacilities";
import MeetingsFormats from "./MeetingsFormats";
import MeetingsBeyond from "./MeetingsBeyond";
import MeetingsEnquiry from "./MeetingsEnquiry";

export default function MeetingsPage() {
  return (
    <div className="meetings-page-container">
      {/* 01 / Meetings Hero */}
      <MeetingsHero />

      {/* 02 / Spaces to Connect */}
      <MeetingsSpaces />

      {/* 03 / Meeting Facilities */}
      <MeetingsFacilities />

      {/* 04 / Meeting Formats */}
      <MeetingsFormats />

      {/* 05 / Beyond the Meeting Room */}
      <MeetingsBeyond />

      {/* 06 / Meeting Enquiry Form */}
      <MeetingsEnquiry />
    </div>
  );
}
