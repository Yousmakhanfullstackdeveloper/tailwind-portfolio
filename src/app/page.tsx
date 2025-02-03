
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
     <main className="flex min-h-screen flex-col bg-[#f8f8f8] container mx-auto px-9 py-1">
       <NavBar/>
       <div className="container mx-auto px-12 py-4">
      <HeroSection/>
      </div>
      <div>
      
      </div>
     </main>
  );
}
