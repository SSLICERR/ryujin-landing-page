import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
    <head>
    <link href="\src\css\style.css" rel="stylesheet"/>

    </head>

<body class="bg-mygray">
  <div class="snap-y w-full h-screen overflow-y-scroll snap-mandatory p-0 m-0">
    
  <div id="section1" class="relative box-border lg:snap-center p-5 md:p-10 lg:h-screen container bg-[url(https://i.imgur.com/zyqhIFk.png]">
    <h2 class=" text-center text-3xl">RYIJUN</h2>
    <p class="text-center">Kämpfe dich durch die Wellen!</p>
  </div>

  <div id="section2" class="w-full relative box-border lg:h-screen lg:snap-center p-10 bg-gradient-to-b from-[#A27AD3] to-[rgba(0,0,0,0)]">
    <h1 class="font-\(family-name\:--ClashDisplay-Bold\) text-7xl text-black mb-2">ABOUT</h1>
    <h3 class="text-center text-2xl pt-10">Tauche ein in die spannende Welt von Ryujin, einem actiongeladenen Spiel, bei dem du dich durch endlose Gegnerwellen kämpfen musst. 
      Nutze dein Schwert und Heiltränke, die sich alle 30 Sekunden regenerieren, um am Leben zu bleiben. Jedes besiegte Monster bringt dich dem nächsten Shop näher, 
      wo du deine Ausrüstung verbessern und neue Items kaufen kannst.
      Entscheide selbst, wann du bereit bist, die nächste Welle zu starten, und bereite dich auf den ultimativen Bosskampf vor.</h3>
    
    <div class="flex space-x-5 place-content-center pt-10">
      <div class="animate-textSpawn bg-black/25 p-5 rounded-lg backdrop-blur-sm">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <div class="animate-textSpawn bg-black/25 p-5 rounded-lg backdrop-blur-sm">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <div class="animate-textSpawn bg-black/25 p-5 rounded-lg backdrop-blur-sm">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  </div>

  <div id="section3" class="w-full relative box-border lg:h-screen lg:snap-center p-10 bg-gradient-to-b from-[#A27AD3] to-[rgba(0,0,0,0)]">
    <h2 class="text-3xl">Section 3</h2>
    <p>Content for section 3...</p>
  </div>
  
</div>
</body>


    </>
  )
}

export default App
