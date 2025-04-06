import React from "react";
import char from "../assets/char.gif";
import char2 from "../assets/fertgig.png";
import char3 from "../assets/image.png";

const AboutSection = () => (
  <>
    <h1
      id="TeamTitle"
      className="relative z-10  font-clashB text-3xl md:text-5xl text-mywhite text-center p-10"
    >
      Über unser Spiel
    </h1>
    <div className="flex justify-center items-center min-h-screen ">
      <div className="grid grid-cols-2 grid-rows-3 gap-5 gap-y-15 p-5 w-300 h-250">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-sm transition-transform">
          <p className="text-2xl text-mywhite font-clashR text-center">
            Tauche ein in die spannende Welt von Ryujin, einem actiongeladenen
            Spiel, bei dem du dich durch endlose Gegnerwellen kämpfen musst. Mit
            deinem Schwert und Heiltränken, die sich alle 30 Sekunden
            regenerieren, stellst du dich der Herausforderung, so lange wie
            möglich zu überleben. Reagiere schnell, kämpfe taktisch und halte
            dich mit cleverem Einsatz deiner Ressourcen im Spiel.
          </p>
        </div>

        <div className="col-start-1 col-end-2 row-start-2 row-end-3 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-md transition-transform overflow-hidden">
          <img className="w-100" src={char2} alt="" />
        </div>

        <div className="col-start-2 col-end-4 row-start-2 row-end-3 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-lg transition-transform">
          <p className="text-2xl text-mywhite font-clashR text-center">
            Sammle unterwegs Goldmünzen, mit denen du neue Fähigkeiten
            freischalten und mächtige Gegenstände kaufen kannst. Jede besiegte
            Kreatur bringt dich deinem Ziel näher: dem nächsten Shop. Dort
            kannst du deine Ausrüstung verbessern, deine Strategie anpassen und
            dich für kommende Herausforderungen wappnen.
          </p>
        </div>

        <div className=" col-start-3 col-end-4 row-start-1 row-end-2 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-xl hover:shadow-[0px_0px_193px_0px_rgba(252,252,252,0.8)] transition-transform">
          <img
            className="w-50 align-middle block ml-auto mr-auto "
            src={char}
            alt=""
          />
        </div>

        {/* New row starts here */}
        <div className="col-start-1 col-end-3 row-start-3 row-end-4 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-md transition-transform">
          <p className="text-2xl text-mywhite font-clashR text-center">
            Du entscheidest selbst, wann du bereit bist, die nächste Welle zu
            starten. Nutze die Ruhephasen klug, um dich zu heilen, einzukaufen
            und deinen Build zu optimieren. Doch sei gewarnt – am Ende wartet
            der ultimative Bosskampf. Bist du stark genug, ihn zu besiegen?
          </p>
        </div>

        <div className="col-start-3 col-end-4 row-start-3 row-end-4 p-5 border border-myoutline bg-mygray rounded-lg backdrop-blur-lg transition-transform">
          <img className="w-80" src={char3} alt="" />
        </div>
      </div>
    </div>
  </>
);

export default AboutSection;
