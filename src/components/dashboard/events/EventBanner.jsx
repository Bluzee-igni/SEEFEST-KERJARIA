import React, { useState, useRef, useEffect } from 'react';
import EventBannerKemerdekaan from './EventBannerKemerdekaan';

export default function EventBanner() {
  return (
    <section>
      <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.03em] text-[#343434] dm-text">
        Event Berlangsung
      </h2>
      <EventBannerKemerdekaan />
    </section>
  );
}
