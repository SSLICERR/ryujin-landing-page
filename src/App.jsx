import { useState } from "react";
import reactLogo from "./assets/react.svg";
import background from "./assets/Main.png";
import pinktree from "./assets/tree.png";
import char from "./assets/char.gif";

function App() {
  return (
    <>
      <head>
        <link href="\src\css\style.css" rel="stylesheet" />
      </head>

      <body class="bg-myblack">
        <div class="snap-y w-full h-screen overflow-y-scroll snap-mandatory p-0 m-0">
          <div
            id="section1"
            class="relative box-border lg:snap-center p-5 md:p-10 lg:h-screen "
          >
            <div class=" text-w text-center text-3xl ">RYIJUN</div>
            <div class="text-center">Kämpf dich durch die Wellen!</div>
          </div>

          <div
            id="section2"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10 bg-#101010"
          >
            <div className="flex justify-center items-center min-h-screen">
              <div className="grid grid-cols-2 grid-rows-2 gap-5 p-10 w-300 h-170">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-sm hover:scale-105 transition-transform">
                  <p class="text-3xl text-bermuda">
                    Tauche ein in die spannende Welt von Ryujin, einem
                    actiongeladenen Spiel, bei dem du dich durch endlose
                    Gegnerwellen kämpfen musst. Nutze dein Schwert und
                    Heiltränke, die sich alle 30 Sekunden regenerieren, um am
                    Leben zu bleiben.
                  </p>
                </div>

                <div className="col-start-1 col-end-2 row-start-2 row-end-3 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-md hover:scale-105 transition-transform overflow-hidden">
                  <p className="text-bermuda text-shadow-[0px_0px_284px_53px_rgba(255,46,227,0.8)]">
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>

                <div className="col-start-2 col-end-4 row-start-2 row-end-3 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-lg hover:scale-105 transition-transform">
                  <p class="text-3xl">
                    Jedes besiegte Monster bringt dich dem nächsten Shop näher,
                    wo du deine Ausrüstung verbessern und neue Items kaufen
                    kannst. Entscheide selbst, wann du bereit bist, die nächste
                    Welle zu starten, und bereite dich auf den ultimativen
                    Bosskampf vor.
                  </p>
                </div>

                <div className="col-start-3 col-end-4 row-start-1 row-end-2 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-xl hover:scale-105 transition-transform ">
                  <img
                    className="w-50 shadow-[0px_0px_193px_0px_rgba(252,252,252,0.8)]"
                    src={char}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="section3"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10"
          >
            <h2 class="text-3xl ">Section 3</h2>
            <p>Content for section 3...</p>
            <div className="align-middle self-center justify-center shadow-[0px_0px_184px_73px_rgba(164,60,185,1)]"></div>
          </div>
          <footer class="lg:snap-center h-1/2 box-border w-full relative mt-1/2 bg-black/50 backdrop-blur-sm p-10">
            <div class="md:grid grid-cols-2 w-full text-white">
              <div class="flex flex-col">
                <h1 class="font-clash text-4xl mb-2 ">macher.studios</h1>
                <a class="hover:underline" href="/imprint">
                  Impressum
                </a>
                <a class="hover:underline" href="/privacy">
                  Datenschutz
                </a>
              </div>
              <div class="flex flex-col">
                <h1 class="font-clash text-4xl mb-2">Kontakt</h1>
                <a
                  href="mailto:m.schoellhammer@edu.letteverein.berlin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  E-Mail
                </a>
              </div>
            </div>
            <div class="absolute bottom-10 left-10">
              © Copyright macher.studios 2025 - All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </>
  );
}

export default App;
