import logo from "./assets/logo.png";
import TeamSection from "./components/team";
import AboutSection from "./components/about";
import Footer from "./components/footer";
//import DevSection from "./components/development";

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
          <div
            id="section1"
            class="relative box-border lg:snap-center p-5 md:p-10 lg:h-screen "
          >
            <div class=" text-w text-center text-6xl font-clashB tracking-widest">
              RYUJIN
            </div>

            <div class="text-center font-clashM">
              Kämpf dich durch die Wellen!
            </div>
            <div className="p-20 text-center">
              <button className="btn btn-neutral">Download now</button>
            </div>
          </div>

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
            {/*<DevSection />*/}
          </div>

          <div
            id="section4"
            class="w-full relative box-border lg:h-screen lg:snap-center p-10"
          >
            <div className="align-middle self-center justify-center "></div>

            <TeamSection />
          </div>
          <Footer></Footer>
        </div>
      </body>
    </>
  );
}

export default App;
