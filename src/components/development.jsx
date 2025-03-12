import React from "react";
import char from "../assets/char.gif";

const DevSection = () => (
  <>
    <h1
      id="TeamTitle"
      className="relative z-10 text-primary font-clashB text-3xl md:text-5xl text-mywhite text-center mt-40"
    >
      About
    </h1>
    <div className="flex justify-center items-center min-h-screen -mt-20">
      <div className="grid grid-cols-2 grid-rows-2 gap-5 p-5 w-300 h-170">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-sm transition-transform">
          <p class="text-3xl text-mywhite font-clashR">
            Tauche ein in die spannende Welt von Ryujin, einem actiongeladenen
            Spiel, bei dem du dich durch endlose Gegnerwellen kämpfen musst.
            Nutze dein Schwert und Heiltränke, die sich alle 30 Sekunden
            regenerieren, um am Leben zu bleiben.
          </p>
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-md transition-transform overflow-hidden">
          <p className="text-mywhite font-clashR">
            hier kommt noch nen Bild oder so hin
          </p>
        </div>

        <div className="col-start-2 col-end-4 row-start-2 row-end-3 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-lg transition-transform">
          <p class="text-3xl text-mywhite font-clashR">
            Jedes besiegte Monster bringt dich dem nächsten Shop näher, wo du
            deine Ausrüstung verbessern und neue Items kaufen kannst. Entscheide
            selbst, wann du bereit bist, die nächste Welle zu starten, und
            bereite dich auf den ultimativen Bosskampf vor.
          </p>
        </div>

        <div className="col-start-3 col-end-4 row-start-1 row-end-2 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-xl hover:shadow-[0px_0px_193px_0px_rgba(252,252,252,0.8)] transition-transform ">
          <img className="w-50 " src={char} alt="" />
        </div>
      </div>
    </div>
  </>
);

export default DevSection;
