"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./css/deluxe-room-explore-more-ways-to-stay.css";

const relatedRooms = [
  {
    id: "twin-room",
    title: "Twin Room",
    description: "A comfortable stay with twin beds, ideal for friends or family.",
    image: "/images/Room and Suites/delux room/Twin Room/Reference photo crop.png",
    href: "/rooms#twin-room",
  },
  {
    id: "suite",
    title: "Suite",
    description: "More space to relax with a separate living area.",
    image: "/images/Room and Suites/delux room/Suite/Reference photo crop.png",
    href: "/rooms#suite",
  },
  {
    id: "presidential-suite",
    title: "Presidential Suite",
    description: "An expansive retreat with refined interiors and added space.",
    image: "/images/Room and Suites/delux room/Presidential Suite/Reference photo crop.png",
    href: "/rooms#presidential-suite",
  },
];

export default function DeluxeRoomExploreMoreWaysToStay() {
  return (
    <section className="deluxe-room-explore-more-ways-to-stay-section">
      <div className="deluxe-room-explore-more-ways-to-stay">
        {/* Header */}
        <div className="explore-more-header">
          <div className="section-heading">
            <h2 className="explore-more-ways-to-stay">Explore more ways to stay.</h2>
            <p className="find-the-room-that-feels-right-for-your">
              Find the room that feels right for your visit.
            </p>
          </div>

          <Link href="/rooms" className="all-rooms-and-suites">
            <span className="all-rooms-suites">ALL ROOMS &amp; SUITES</span>
            <div className="arrow-right">
              <Image
                src="/images/Room and Suites/delux room/Arrow right.svg"
                alt="Arrow right"
                width={20}
                height={20}
                unoptimized
              />
            </div>
          </Link>
        </div>

        {/* 3 Related Room Cards */}
        <div className="related-rooms-three-cards">
          {relatedRooms.map((room) => (
            <div key={room.id} className="room-card-twin-room">
              {/* Photo */}
              <div className="room-photo-wrapper">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="room-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>

              {/* Details */}
              <div className="room-details-content">
                <h3 className="room-card-title">{room.title}</h3>
                <p className="room-card-desc">{room.description}</p>
              </div>

              {/* View Details CTA */}
              <Link href={room.href} className="view-details-btn">
                <span className="view-details-btn-text">VIEW DETAILS</span>
                <div className="view-details-arrow">
                  <Image
                    src="/images/Room and Suites/delux room/Arrow right 2.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    unoptimized
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { DeluxeRoomExploreMoreWaysToStay };
