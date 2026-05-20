import React, { useState, useRef, useEffect } from 'react';
import EventBannerKemerdekaan from '../events/EventBannerKemerdekaan';
import EventBannerPramuka from '../events/EventBannerPramuka';

export default function EventPanel() {
  return (
    <section className="w-full flex flex-col h-full">
      <div className="mb-6 pb-4 border-b-[1.5px] border-[#d0d0d0]">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] pl-2">Event</h1>
      </div>

      <div className="flex flex-col gap-6 pr-10 pl-2">
        <EventBannerKemerdekaan />
        <EventBannerPramuka />
      </div>
    </section>
  );
}
