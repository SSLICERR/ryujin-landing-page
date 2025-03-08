import logo from "./assets/logo.png";
import TeamSection from "./components/team";
import AboutSection from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <head>
        <link href="\src\css\style.css" rel="stylesheet" />
        <title>RYUJIN</title>
        <link rel="icon" href={logo} />
      </head>

      <body class="bg-myblack">
        <div class="snap-y w-full h-screen overflow-y-scroll snap-mandatory p-0 m-0">
          <div
            id="section1"
            class="relative box-border lg:snap-center p-5 md:p-10 lg:h-screen "
          >
            <div class=" text-w text-center text-3xl font-clashB ">RYUJIN</div>
            <div class="text-center font-clashM">
              Kämpf dich durch die Wellen!
            </div>
          </div>

          <div
            id="section2"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10 bg-#101010"
          >
            <div className="align-middle self-center justify-center shadow-[0px_0px_184px_73px_rgba(250,249,246)] overflow-hidden"></div>
            <AboutSection></AboutSection>
          </div>

          <div
            id="section3"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10"
          >
            <div className="align-middle self-center justify-center shadow-[0px_0px_184px_73px_rgba(164,60,185,1)] overflow-hidden"></div>

            <TeamSection></TeamSection>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </>
  );
}

export default App;
