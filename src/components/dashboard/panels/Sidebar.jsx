import React, { useState, useRef, useEffect } from 'react';

const menuItems = [
  { label: "Beranda", icon: "home" },
  { label: "Misi", icon: "book" },
  { label: "Event", icon: "ticket" },
  { label: "Level", icon: "star" },
  { label: "Pekerjaan", icon: "briefcase" },
  { label: "Sosial", icon: "users" },
  { label: "Pesan", icon: "mail" },
];

export default function Sidebar({ activeTab, setActiveTab }
