import React from "react";

const Footer = () => (
  <footer class="lg:snap-center  box-border w-full relative mt-40 bg-black/50 backdrop-blur-sm p-10 bg-myblack">
    <div class="md:grid grid-cols-2 w-full text-white">
      <div class=" flex flex-col">
        <h1 class="font-clashB text-4xl mb-2 text-mywhite">
          Macher Game Studios
        </h1>
        <a class="hover:underline text-mywhite font-clashR" href="/">
          Home
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryujin-landing-page/imprint"
        >
          Impressum
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryujin-landing-page/privacy"
        >
          Datenschutz
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryujin-landing-page/stats"
        >
          Website Stats
        </a>
        <a
          class="hover:underline text-mywhite font-clashR"
          href="/ryujin-landing-page/y"
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
      <div class="pt-20 left-10 text-mywhite font-clashR inline-block ">
        © Copyright macher game studios 2025 - All rights reserved. <br></br>
        made with ♡ by slicer.
      </div>
    </div>
  </footer>
);

export default Footer;
