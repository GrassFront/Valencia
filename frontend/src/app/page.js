import {
  BookingFlow,
  DateSelector,
  GuestRoomCounter,
} from "../components/booking";
import { Card, ImageCard } from "../components/cards";
import { SectionHeading, Typography } from "../components/common";
import {
  Button,
  IconButton,
  Input,
  Select,
  Textarea,
} from "../components/ui";
import { ArrowRight } from "lucide-react";

const palette = [
  ["Deep Green", "bg-primary"],
  ["Antique Gold", "bg-accent"],
  ["Warm Beige", "bg-warm-beige"],
  ["Taupe", "bg-taupe"],
  ["Rich Brown", "bg-rich-brown"],
  ["Paper", "bg-paper"],
  ["Hairline", "bg-hairline"],
];

export default function DesignSystemPreview() {
  return (
    <main className="mx-auto flex w-full max-w-wide flex-col gap-12 px-4 py-12 md:px-8">
      <header className="flex flex-col gap-3 border-b border-hairline pb-8">
        <Typography variant="brandWordmark">VALENCIA</Typography>
        <Typography as="p" variant="body" className="text-ink">
          Design-system preview — shared foundations only.
        </Typography>
      </header>

      <section aria-labelledby="tokens-heading" className="flex flex-col gap-4">
        <SectionHeading id="tokens-heading" title="Color tokens" />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {palette.map(([name, colorClass]) => (
            <li key={name} className="flex flex-col gap-2">
              <span
                aria-hidden="true"
                className={`h-12 rounded-brand border border-hairline ${colorClass}`}
              />
              <span className="font-body text-booking-value">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="type-heading" className="flex flex-col gap-4">
        <SectionHeading id="type-heading" title="Typography" />
        <Typography variant="brandHeadline">Where Elegance Feels Like Home</Typography>
        <Typography variant="bookingLabel">Booking label</Typography>
        <Typography variant="bookingValue">Select date</Typography>
        <Typography variant="bookingButton">Check availability</Typography>
      </section>

      <section aria-labelledby="buttons-heading" className="flex flex-col gap-4">
        <SectionHeading id="buttons-heading" title="Buttons" />
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="text">Text button</Button>
          <IconButton label="Continue" className="size-12">
            <ArrowRight aria-hidden="true" size={18} />
          </IconButton>
        </div>
      </section>

      <section aria-labelledby="fields-heading" className="flex flex-col gap-4">
        <SectionHeading id="fields-heading" title="Form controls" />
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Full name" placeholder="Enter your name" context="enquiry" />
          <Select label="Room preference" context="stay" defaultValue="">
            <option value="" disabled>
              Select a room
            </option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </Select>
          <Textarea label="Special requests" context="stay" placeholder="Optional" />
          <DateSelector label="Check-in date" />
        </div>
      </section>

      <section aria-labelledby="cards-heading" className="flex flex-col gap-4">
        <SectionHeading id="cards-heading" title="Card bases" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <Typography variant="bookingLabel">Reusable card base</Typography>
            <Typography as="p" variant="body" className="mt-2">
              Surface, border, and radius use shared design tokens.
            </Typography>
          </Card>
          <ImageCard>
            <div className="p-4">
              <Typography variant="bookingLabel">Image card base</Typography>
            </div>
          </ImageCard>
        </div>
      </section>

      <section aria-labelledby="booking-heading" className="flex flex-col gap-4">
        <SectionHeading id="booking-heading" title="Booking controls" />
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col gap-2">
            <Typography as="span" variant="bookingLabel">Adults</Typography>
            <GuestRoomCounter type="adults" />
          </div>
          <div className="flex flex-col gap-2">
            <Typography as="span" variant="bookingLabel">Children</Typography>
            <GuestRoomCounter type="children" />
          </div>
        </div>
        <BookingFlow />
      </section>
    </main>
  );
}
