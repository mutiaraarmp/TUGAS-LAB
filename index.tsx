import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/recursive";
import "@fontsource-variable/roboto-flex";
import "@fontsource-variable/rubik";
import React from "react";
import "./globals.css";

import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const allNames = [
  "Aisyah", "Bagas", "Citra", "Damar", "Eka", "Farhan", "Gita", "Hani", "Indra", "Joko",
  "Kirana", "Lutfi", "Mega", "Nina", "Omar", "Putri", "Qory", "Rafi", "Salsa", "Tari",
  "Udin", "Vina", "Wulan", "Xena", "Yusuf", "Zara"
];

const currentIndex = 6; // contoh urutan stambuk ke-7 (karena index 0-based)

function getNamesAround(index: number) {
  const before = [];
  const after = [];
  const total = allNames.length;

  for (let i = 1; i <= 5; i++) {
    before.push(allNames[(index - i + total) % total]);
    after.push(allNames[(index + i) % total]);
  }
  return [...before.reverse(), allNames[index], ...after];
}

const fonts = [
  "font-inter", "font-roboto", "font-recursive", "font-jetbrains", "font-rubik",
  "font-merriweather", "font-lato", "font-opensans", "font-playfair", "font-raleway"
];

const Home = () => {
  const names = getNamesAround(currentIndex);
  return (
    <main className="grid grid-cols-1 gap-4">
      {names.map((name, idx) => (
        <div key={idx} className={`${fonts[idx % fonts.length]} text-2xl`}>{name}</div>
      ))}
    </main>
  );
};

export default Home;
