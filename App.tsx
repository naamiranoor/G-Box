import React, { useState } from 'react';
import { ChromeFrame } from './components/ChromeFrame';
import { NavBar } from './components/NavBar';
// AI assistant removed from client bundle. The component file remains as a
// disabled placeholder. No provider SDKs or keys are embedded in the client.
import { NavItem, Feature } from './types';

export default function App() {
  const [activeItem, setActiveItem] = useState<NavItem>(NavItem.HOME);

  const features: Feature[] = [
    {
      id: 1,
      title: "G-Controller Pro",
      description: "The power and precision of the future-generation console. Choose your size, style, and color.",
      image: "https://picsum.photos/id/96/100/100" // Tech/Controller placeholder
    },
    {
      id: 2,
      title: "Entertaining Extras",
      description: "Want to make your GBox a DVD player? How about a Karaoke station? Get the party started!",
      image: "https://picsum.photos/id/452/100/100" // Remote/Tech placeholder
    },
    {
      id: 3,
      title: "Accessories",
      description: "Game on the go with GBox backpacks and travel cases. Get organizers, surge protectors, and more.",
      image: "https://picsum.photos/id/367/100/100" // Bag/Gear placeholder
    },
    {
      id: 4,
      title: "Cables and Adaptors",
      description: "Need some help getting hooked up? These accessories will have you gaming in no time.",
      image: "https://picsum.photos/id/1/100/100" // Cable/Tech placeholder
    },
    {
      id: 5,
      title: "G-Live Wireless Gear",
      description: "Take your game online and hook up your GBox to a wireless network. We can help!",
      image: "https://picsum.photos/id/250/100/100" // Camera/Tech placeholder
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-8 bg-gray-300 font-sans">
      
      {/* Main Console Unit */}
      <ChromeFrame className="w-full max-w-6xl min-h-[850px] flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] z-10">
            
            {/* TOP HEADER AREA */}
            <div className="h-28 relative bg-gradient-to-b from-gray-200 to-white rounded-t-[24px] px-8 flex justify-between items-center border-b-4 border-gray-300 flex-shrink-0">
                {/* Logo Area */}
                <div className="flex items-center space-x-2 z-10">
                    <div className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 drop-shadow-sm transform skew-x-[-10deg]">
                        G<span className="text-gray-400">BOX</span>
                    </div>
                </div>

                {/* Top Right Utility Bar */}
                <div className="flex items-center space-x-4 text-xs font-bold text-gray-600 z-10">
                    <div className="flex items-center bg-white border border-gray-400 rounded-full px-2 py-1 shadow-inner">
                        <input type="text" placeholder="Search" className="outline-none text-gray-700 w-24 bg-transparent" />
                        <div className="w-4 h-4 bg-purple-500 rounded-full ml-1 shadow-[0_0_5px_purple]"></div>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border border-gray-400"></span>
                        <span>International</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-purple-600">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border border-gray-400"></span>
                        <span>My Account</span>
                    </div>
                    <div className="bg-gray-300 px-3 py-1 border border-gray-400 rounded shadow-sm text-purple-800 hover:bg-gray-200 cursor-pointer">
                        Sign In
                    </div>
                </div>

                {/* Industrial Ribs Background for Header */}
                <div className="absolute bottom-0 left-0 w-full h-4 flex justify-between px-10 opacity-30 pointer-events-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <div key={i} className="w-[2px] h-full bg-gray-500"></div>
                    ))}
                </div>
            </div>

            {/* NAVIGATION PILL */}
            <NavBar activeItem={activeItem} onNavigate={setActiveItem} />

            {/* MAIN CONTENT GRID */}
            <div className="flex-1 flex flex-col md:flex-row p-6 gap-6 overflow-hidden">
                
                {/* LEFT HERO COLUMN */}
                <div className="flex-[3] relative bg-black rounded-tl-[40px] rounded-bl-[20px] border-l-8 border-t-8 border-gray-800 shadow-[inset_0_0_20px_rgba(0,0,0,1)] overflow-hidden flex flex-col min-h-[400px]">
                    
                    {/* Background Grid Effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none" 
                        style={{ 
                            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                            backgroundSize: '40px 40px' 
                        }}>
                    </div>
                    
                    {/* Glowing Orb Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex-1 flex flex-col p-8">
                        
                                {/* Logo Repeat */}
                                <div className="mb-4">
                                    <h1 className="text-3xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                                        <span className="text-purple-500">G</span>BOX
                                    </h1>
                                </div>

                                {/* Hero Image */}
                                <div className="flex-1 flex items-center justify-center relative pl-8 min-h-[300px]">
                                    <div className="absolute w-64 h-64 bg-black rounded-full blur-xl opacity-60"></div>
                                    {/* Synthesized Console Look via HTML/Tailwind Shapes */}
                                    <div className="relative group cursor-pointer transform scale-100 hover:scale-105 transition-transform duration-500">
                                        <div className="w-80 h-56 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg transform skew-x-12 shadow-[0_20px_50px_rgba(0,0,0,1)] border-t border-l border-gray-600 relative overflow-hidden">
                                            {/* Large X (now G) indentation */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-48 h-48 rounded-full border-[20px] border-black/50 shadow-[inset_0_0_20px_black]"></div>
                                            </div>
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-900 rounded-full shadow-[0_0_20px_purple] border-4 border-gray-800 flex items-center justify-center">
                                                <span className="text-black font-black italic text-2xl">G</span>
                                            </div>
                                        </div>
                                        {/* Controller Placeholder */}
                                        <div className="absolute -bottom-8 -left-6 w-48 h-32 bg-gray-800 rounded-3xl shadow-2xl border-t border-gray-600 transform -rotate-12 z-10">
                                            <div className="absolute top-4 left-4 w-12 h-12 bg-gray-900 rounded-full shadow-inner"></div>
                                            <div className="absolute top-8 right-8 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_5px_purple]"></div>
                                            <div className="absolute top-4 right-12 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_5px_blue]"></div>
                                        </div>

                                        {/* Price Tag */}
                                        <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-bold text-xl px-4 py-2 transform rotate-6 border-2 border-black shadow-lg z-20">
                                            $299.99
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <h2 className="text-purple-400 font-bold text-xl mb-2 tracking-wide">it's good to play together</h2>
                                    <div className="bg-black/50 p-4 border-l-4 border-purple-600 text-left backdrop-blur-sm">
                                        <h3 className="text-purple-300 font-bold text-sm mb-1">GBox Video Game System:</h3>
                                        <p className="text-gray-300 text-xs leading-relaxed">
                                            Experience the future of video gaming. Graphics like never before, cinematic sound, 
                                            intense multiplayer—the world's most powerful console has it all.
                                            Powered by GBox neural cores.
                                        </p>
                                    </div>
                                </div>
                    </div>
                </div>

                {/* RIGHT FEATURES COLUMN */}
                <div className="flex-[2] flex flex-col space-y-4 h-full overflow-y-auto pr-2 custom-scrollbar min-w-[250px]">
                    
                    {features.map((feature) => (
                        <div key={feature.id} className="group flex gap-3 bg-gradient-to-r from-gray-100 to-white p-2 rounded-r-xl border-l-4 border-transparent hover:border-purple-600 shadow-sm transition-all cursor-pointer hover:translate-x-1">
                            <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className="w-16 h-16 rounded-md object-cover border border-gray-300 shadow-inner grayscale group-hover:grayscale-0 transition-all"
                            />
                            <div className="flex-1">
                                <h4 className="text-green-900 group-hover:text-purple-700 font-bold text-sm mb-1">{feature.title}</h4>
                                <p className="text-[10px] text-gray-600 leading-tight">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Catalog Banner */}
                    <div className="relative mt-4 bg-black rounded-lg border-2 border-gray-600 overflow-hidden h-24 group cursor-pointer flex-shrink-0">
                        <img src="https://picsum.photos/id/532/300/100" className="opacity-50 w-full h-full object-cover" alt="Catalog" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                            <h3 className="text-2xl font-black text-white uppercase tracking-widest border-b-2 border-purple-500">Hardware</h3>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest">Catalog</h3>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-xs font-bold text-gray-800">Enter the World of GBox</p>
                        <div className="text-[10px] text-gray-500 mt-1">
                            <span className="hover:text-purple-600 cursor-pointer">Low</span> | <span className="hover:text-purple-600 cursor-pointer">High</span>
                            <br/>
                            (requires Neural Link)
                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM DECORATIVE RIBS */}
            <div className="h-6 relative bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-[24px] mt-auto border-t-2 border-white flex-shrink-0">
                <div className="absolute inset-0 flex justify-center space-x-2 py-1 overflow-hidden">
                    {Array.from({ length: 60 }).map((_, i) => (
                        <div key={i} className="w-[4px] h-full bg-gradient-to-b from-gray-500 to-gray-300 rounded-full shadow-[1px_0_1px_rgba(255,255,255,0.5)]"></div>
                    ))}
                </div>
                <div className="absolute right-4 bottom-1 text-gray-500 text-[10px] font-bold italic tracking-wider">
                    Microhard
                </div>
            </div>

      </ChromeFrame>
      
      {/* Footer - Classic Text Links on Background */}
      <div className="w-full max-w-4xl mt-6 text-center">
         <div className="flex justify-center items-center space-x-2 text-[11px] text-gray-600 font-bold font-sans tracking-wide">
             <a href="#" className="hover:underline hover:text-purple-800">Microhard Game Studios</a>
             <span className="text-gray-400">|</span>
             <a href="#" className="hover:underline hover:text-purple-800">GBox Jobs</a>
             <span className="text-gray-400">|</span>
             <a href="#" className="hover:underline hover:text-purple-800">GBox Forums</a>
             <span className="text-gray-400">|</span>
             <a href="#" className="hover:underline hover:text-purple-800">Developers</a>
         </div>
         <div className="mt-2 text-[10px] text-gray-500 font-medium">
             ©2024 Microhard Corporation. All Rights Reserved. GBox, GBox Live, and the GBox logos are registered trademarks or trademarks of Microhard Corp.
         </div>
      </div>
      
    </div>
  );
}