import logo from "./assets/logo.png";
import TeamSection from "./components/team";
import AboutSection from "./components/about";
import Footer from "./components/footer";
import MainSection from "./components/mainSection";

function App() {
  return (
    <>
      <head>
        <link href="\src\css\style.css" rel="stylesheet" />
        <title className="">RYUJIN</title>
        <link rel="icon" href={logo} />
      </head>

      <body class="bg-myblack">
        <div class=" w-full h-screen overflow-y-scroll  p-0 m-0">
          <MainSection />

          <div
            id="section2"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10 bg-#101010"
          >
            <div className="align-middle self-center justify-center "></div>
            <AboutSection />
          </div>
          <div
            id="section3"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10 bg-#101010"
          >
            <div className="align-middle self-center justify-center "></div>
          </div>

          <div
            id="section4"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10"
          >
            <div className="align-middle self-center justify-center "></div>

            <TeamSection />
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default App;
