import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromotionServices from "@/components/PromotionServices";
import About from "@/components/AboutUs";
import OurServices from "@/components/OurServices";
import WorkingProcess from "@/components/WorkingProcess";
import Footer from "@/components/Footer";
import Container from "@/components/Container"; 

import Image from "next/image";
import Bg1 from "@/assets/bg-img1.png";
import Bg2 from "@/assets/bg-img2.png";
import Bg3 from "@/assets/bg-img3.png";


export default function Home() {
  return (
    <>
    <Container className="background">

      <main className="flex-1">
        <Image src={Bg1} alt="" className="absolute top-0 left-0 z-10 w-[900px]"/>
        <Image src={Bg1} alt="" className="absolute top-20 left-0 z-10 w-[900px]"/>
        <Image src={Bg1} alt="" className="absolute top-0 left-60 z-10 w-[900px]"/>
        <Image src={Bg1} alt="" className="absolute top-0 left-90 z-10 w-[900px]"/>           
        <Image src={Bg2} alt="" className="absolute top-0 right-5 z-10 w-[900px]"/>
        <Image src={Bg3} alt="" className="absolute top-0 right-0 z-10 md:w-[350px]"/>
        
        <Navbar />
        <HeroSection />         
        <PromotionServices />
        <About />
        <OurServices />
        <WorkingProcess />
      </main>
    </Container>
    <Footer />
    </>
  );
}
