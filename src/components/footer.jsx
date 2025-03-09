import React from "react";
import { HeartHandshake } from "./heart";

const Footer = () => (
  <footer class="lg:snap-center h-1/2 box-border w-full relative mt-1/2 bg-black/50 backdrop-blur-sm p-10">
    <div class="md:grid grid-cols-2 w-full text-white">
      <div class=" flex flex-col">
        <h1 class="font-clashB text-4xl mb-2 text-mywhite">macher.studios</h1>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryijun-landing-page/imprint"
        >
          Impressum
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryijun-landing-page/privacy"
        >
          Datenschutz
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryijun-landing-page/stats"
        >
          Website Stats
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryijun-landing-page/y"
        >
          Steam Page
        </a>
      </div>
      <div class="flex flex-col">
        <h1 class="font-clashB text-4xl mb-2 text-mywhite">Kontakt</h1>
        <a
          href="mailto:m.schoellhammer@edu.letteverein.berlin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline text-mywhite font-clashR"
        >
          E-Mail
        </a>
      </div>
    </div>
    <div class="absolute pt-50 left-10 text-mywhite font-clashR inline-block">
      © Copyright macher.studios 2025 - All rights reserved. <br></br>
      made with ♡ by slicer.
    </div>
  </footer>
);

export default Footer;
