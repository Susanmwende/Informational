import Features from "@/app/Features";
import Navbar from "@/app/Navbar";
import Homepage from "@/app/Homepage";
import About from "@/app/About";
import Team from "@/app/Team";
import Faq from "./faq/Faq";
import Footer from "./Footer/Footer";



export default function Home() {
  return (
    <div>
       <Navbar/>
       <Homepage/>
      <Features/>
      <About/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  );
}
