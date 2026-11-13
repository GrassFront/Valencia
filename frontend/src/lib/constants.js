export const BOOKING_DEFAULTS = Object.freeze({
  checkIn: "Select date",
  checkOut: "Select date",
  duration: "12 Hours",
  rooms: 1,
  adults: 2,
  children: 0,
});

export const BOOKING_MODES = Object.freeze(["Hourly", "Night"]);

export const BOOKING_STATES_BY_MODE = Object.freeze({
  Hourly: Object.freeze([
    "Empty",
    "Check-in",
    "Check-out",
    "Duration",
    "Guests",
    "Ready",
  ]),
  Night: Object.freeze(["Empty", "Check-in", "Check-out", "Guests", "Ready"]),
});

export const GUEST_ROOM_COUNTERS = Object.freeze({
  rooms: Object.freeze({ label: "Rooms", min: 1, max: 5, initial: 1 }),
  adults: Object.freeze({ label: "Adults", min: 1, max: 6, initial: 2 }),
  children: Object.freeze({ label: "Children", min: 0, max: 4, initial: 0 }),
});
