import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showcontent,setshowcontent] =useState(false)
  useGSAP(()=>{
    const t1 = gsap.timeline();

    t1.to(".vi-mask-group",{
      rotate:10,
      ease:"power4.easeInOut",
      duration:2,
      transformOrigin: "50% 50%"
    })
    .to(".vi-mask-group",{
      scale:10,
      duration:1,
      delay: -1.8,
      ease:"expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>=.9 ){
          document.querySelector(".svg")?.remove();
          setshowcontent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=>{

    if(!showcontent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:-1,
      ease:"expo.easeInOut",
    });
      gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:-1,
      ease:"expo.easeInOut",
    });
         gsap.to(".virat-wrapper ",{
      rotate:0,
      x:"-50%",
      scale:1,
      bottom:"-25%",
      duration:2,
      delay:-1,
      ease:"expo.easeInOut",
    });
  gsap.to(".text-wrapper",{
      rotate:0,
      scale:1,
      duration:2,
      delay:-1,
      ease:"expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX /  window.innerWidth - 0.5) * 30;
      gsap.to(".img .text",{
         x: xMove * 0.6,
        
      });
      gsap.to(".img .bg",{
        x: xMove * 2,
        ease: "power3.out",
        duration: 0.5,

      });
      
    })
  },[showcontent]);
  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 w-full h-screen overflow-hidden bg-black'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className='vi-mask-group'>
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  RCB
                </text>
              </g>
            </mask> 
          </defs>
          <image 
            href='./stadium.jpeg'
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showcontent &&
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full  h-screen bg-black' >
            <div className='nav absolute z-[10] top-0 left-0 w-full p-10 '>
              <div className='logo flex gap-100'>
                <div className='lines'>
                
               <img className='h-20 -ml-2' src="./rcb_logo.png" alt="RCB Logo" />
                </div>
               
              </div>
            </div>
            <div className='img relative w-full h-screen overflow-hidden '>
              
              <img className='absolute scale-[1.2] rotate-[-15deg] bg top-0 left-0 w-full h-full object-cover' src="public\sta.jpg_large" alt="stadium" />
              <div className="text-wrapper absolute top-20 left-1/2 -translate-x-1/2 w-full flex flex-col items-center text-center scale-[1.5] rotate-[-10deg]">
  <div className='text flex flex-col gap-2'>
    <h1 className='text-[10rem] leading-none text-[#00BFFF]'>Royal</h1>
    <h1 className='text-[10rem] leading-none text-[#C0C0C0]'>Challengers</h1>
    <h1 className='text-[10rem] leading-none text-green-400'>Bangalore</h1>
  </div>
</div>

             <div className="virat-wrapper absolute bottom-[-150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]">
    <img className='virat h-screen scale-[0.8] ' src="./cup.png" alt="RCB Cup" />
  </div>

            
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black  to-transparent'>
            <div className='flex gap-4  items-center'>
              <i className="text-3xl ri-arrow-down-line text-[#C0C0C0]"></i>
              <h3 className='text-xl font-[Helvetica_Now_Display] text-[#C0C0C0]'>Scroll Down</h3>
            </div>
            <h3 className='absolute top-1.2 left-1/2 -translate-y-1/2 -ml-36 text-4xl text-[#FFD700]'>Champions 2025</h3>
            </div>
          </div>
          </div>
        
           <div className='w-full h-screen  flex items-center justify-center p-10  bg-black'>
            <div className='cnt flex  w-full text-white h-[80%] '>
              <div className='imgl overflow-hidden relative w-1/2 h-full'>
              <img className='absolute  h-80 scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./virat_rcb.png" alt="Virat Kohli" />
              </div>
            <div className='right w-[30%] py-10'>
              <h1 className='text-4xl'>Virat Kohli.</h1>
              <h1 className=' mt-4 text-4xl'>RCB's Iconic Leader</h1>
                <p className='mt-4 font-[Helvetica_Now_Display] text-xl'>Only player to represent RCB in every IPL season since the tournament began in 2008.
                Served as RCB captain from 2011 to 2021, leading the team through many memorable campaigns.
                Known for his aggressive captaincy, passion for the game, and unrelenting spirit on the field.</p>
                <h1 className='mt-4 text-4xl'> Legacy & Loyalty</h1>
                <p className='mt-4 font-[Helvetica_Now_Display] text-xl'>
                  Despite never winning an IPL trophy, Kohli's loyalty and love for RCB have made him the face of the franchise.

Retained as a senior player and mentor, continuing to guide the next generation of RCB stars.

A massive reason behind RCB's enormous fan base — for many, RCB = Kohli.


                </p>
            </div>
            </div>
          </div>

       <div className='w-full h-screen flex items-center justify-center p-10 bg-black'>
  <div className='cnt flex w-full text-white h-[80%]'>
    <div className='right ml-50 w-[30%] py-10'>
      <h1 className='text-4xl'>Rajat Patidar(C)</h1>
      <h1 className='mt-4 text-4xl'>Breakthrough Performer</h1>
      <p className='mt-4 font-[Helvetica_Now_Display] text-xl'>
       Rajat Patidar made headlines with his explosive century in the IPL 2022 Eliminator against LSG — an unbeaten 112 off just 54 balls, which announced his arrival in style.

Since then, he's become a reliable top-order batter for RCB, known for his clean hitting and composure under pressure.
      </p>
      <h1 className='mt-4 text-4xl'>2025 Season Highlight</h1>
      <p className='mt-4 font-[Helvetica_Now_Display] text-xl'>
        Scored 411 runs in IPL 2025 across 13 matches at a strike rate of 146.

Played several match-winning knocks, including a crucial 75 off 39 balls against Delhi Capitals.

Continued to be one of RCB's go-to players during pressure situations.
      </p>
    </div>

    <div className='imgl overflow-hidden relative w-1/2 h-full -mr-30'>
      <img
        className='absolute h-80 scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        src="./597.avif"
        alt="Rajat Patidar"
      />
    </div>
  </div>
</div>
<div className="img1 relative w-full h-screen overflow-hidden">
   <img className=' absolute scale-[1.2] bg top-0 left-0 w-full h-full object-cover' src="./cel(1).jpg" alt="Celebration" />
</div>
<div className="img1 grid grid-cols-2 gap-6 w-full h-screen bg-white px-10 py-10">
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-cover rounded-2xl" src="./cel(6).jpg" alt="RCB Celebration 1" />
  </div>
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-cover rounded-2xl" src="public\_S3_9538.jpg" alt="RCB Celebration 2" />
  </div>
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-cover rounded-2xl" src="public\1 (6).png" alt="RCB Celebration 3" />
  </div>
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-cover rounded-3xl" src="public\1 (1) (1).png" alt="RCB Celebration 4" />
  </div>
  
</div>

<div className="squad-section bg-gradient-to-br from-red-600  to-black
 text-white py-20 px-10">
  <h1 className="text-5xl text-center text-white font-bold mb-10">SQUAD</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./Rajat.png" alt="Rajat Patidar" />
      <h2 className="mt-4 text-xl font-bold">RAJAT PATIDAR <span className="text-yellow-400">(C)</span></h2>
      <p className="text-sm text-gray-400">BATTER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./vk.png" alt="Virat Kohli" />
      <h2 className="mt-4 text-xl font-bold">VIRAT KOHLI</h2>
      <p className="text-sm text-gray-400">BATTER</p>
    </div>
      <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./salt.png" alt="Phil Salt" />
      <h2 className="mt-4 text-xl font-bold">Phil Salt ✈️</h2>
      <p className="text-sm text-gray-400">BATTER</p>
    </div>
    
    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./padikkal.png" alt="Devdutt Padikkal" />
      <h2 className="mt-4 text-xl font-bold">Devdutt Padikkal</h2>
      <p className="text-sm text-gray-400">BATTER</p>
    </div>

      <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./jitesh.png" alt="Jitesh Sharma" />
      <h2 className="mt-4 text-xl font-bold">Jitesh Sharma<span className="text-yellow-400"> (Wk)</span></h2>
      <p className="text-sm text-gray-400">Wicket Keeper</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./krunal.png" alt="Krunal Pandya" />
      <h2 className="mt-4 text-xl font-bold">Krunal Pandya </h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>

      <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./david.png" alt="Tim David" />
      <h2 className="mt-4 text-xl font-bold">Tim David ✈️</h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>

 <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./romario.png" alt="Romario Shepherd" />
      <h2 className="mt-4 text-xl font-bold">Romario Shepherd ✈️</h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>
    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./suyash.png" alt="Suyash Sharma" />
      <h2 className="mt-4 text-xl font-bold">Suyash Sharma</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>
    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./bhuvi.png" alt="Bhuvneshwar Kumar" />
      <h2 className="mt-4 text-xl font-bold">Bhuvneshwar Kumar </h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>
 <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./hazelwood.png" alt="Josh Hazlewood" />
      <h2 className="mt-4 text-xl font-bold">Josh Hazlewood ✈️</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>
    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./dayal.png" alt="Yash Dayal" />
      <h2 className="mt-4 text-xl font-bold">YASH DAYAL</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./livingstone.png" alt="Liam Livingstone" />
      <h2 className="mt-4 text-xl font-bold">LIAM LIVINGSTONE ✈️</h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./bethell.png" alt="Jacob Bethell" />
      <h2 className="mt-4 text-xl font-bold">Jacob Bethell ✈️</h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./nuwan.png" alt="Nuwan Thushara" />
      <h2 className="mt-4 text-xl font-bold">Nuwan Thushara ✈️</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./rasik.png" alt="Rasikh Dar" />
      <h2 className="mt-4 text-xl font-bold">Rasikh Dar</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./manoj.png" alt="Manoj Bhandage" />
      <h2 className="mt-4 text-xl font-bold">Manoj Bhandage</h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./swastik.png" alt="Swastik Chikara" />
      <h2 className="mt-4 text-xl font-bold">Swastik Chikara</h2>
      <p className="text-sm text-gray-400">Batter</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./lungi.png" alt="Lungi Ngidi" />
      <h2 className="mt-4 text-xl font-bold">Lungi Ngidi ✈️</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./swapnil.png" alt="Swapnil Singh" />
      <h2 className="mt-4 text-xl font-bold">Swapnil Singh</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./mohit rathee.png" alt="Mohit Rathee" />
      <h2 className="mt-4 text-xl font-bold">Mohit Rathee</h2>
      <p className="text-sm text-gray-400">ALL-ROUNDER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./abhi.png" alt="Abhinandan Singh" />
      <h2 className="mt-4 text-xl font-bold">Abhinandan Singh</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./Mayank Agarawal.png" alt="Mayank Agarawal" />
      <h2 className="mt-4 text-xl font-bold">Mayank Agarawal</h2>
      <p className="text-sm text-gray-400">Batter</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./Blessing Muzarabani.png" alt="Blessing Muzarabani" />
      <h2 className="mt-4 text-xl font-bold">Blessing Muzarabani ✈️</h2>
      <p className="text-sm text-gray-400">BOWLER</p>
    </div>

    <div className="text-center">
      <img className="mx-auto h-40 object-contain" src="./Tim Seifert.png" alt="Tim Seifert" />
      <h2 className="mt-4 text-xl font-bold">Tim Seifert <span className="text-yellow-400"> (Wk)</span> ✈️</h2>
      <p className="text-sm text-gray-400">Wicket Keeper</p>
    </div>
</div>
</div>
<div className="img1 grid grid-cols-2 gap-6 w-full h-screen bg-white px-10 py-10">
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-full rounded-2xl" src="./cel(2).jpg" alt="RCB Celebration 1" />
  </div>
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-full rounded-2xl" src="./cel(3).jpg" alt="RCB Celebration 2" />
  </div>
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-full rounded-2xl" src="./cel(4).jpg" alt="RCB Celebration 3" />
  </div>
  <div className="w-full h-full overflow-hidden relative">
    <img className="w-full h-full object-full rounded-2xl" src="./cel(5).jpg" alt="RCB Celebration 4" />
  </div> 
</div>

<div className="footer bg-gradient-to-t from-black to-[#1a1a1a] text-white py-12 px-10 border-t border-red-900">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-center">
      
      {/* Logo and Social */}
      <div className="flex flex-col items-center">
        <img src="./rcb_logo.png" className="h-16 mb-4" alt="RCB Logo" />
        <div className="flex space-x-4 mb-6">
          
          <a href="#" className="text-2xl hover:text-red-500 transition">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#" className="text-2xl hover:text-red-500 transition">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-6">
          © 2025 Royal Challengers Bangalore
        </p>
      </div>

      {/* Bottom Note */}
      <div className="text-sm text-gray-500">
        Made with <i className="ri-heart-fill text-red-500"></i> by AVINASH
      </div>
      
    </div>
  </div>
</div>
</div>

       }
    </>
  );
}
export default App;
// 1:22:15

