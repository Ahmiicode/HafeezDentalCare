import Navbar from "@/components/components/Navbar";
import Hero from "@/components/components/Hero";
import TrustBar from "@/components/components/TrustBar";
import AboutDoctor from "@/components/components/AboutDoctor";
import Services from "@/components/components/Services";
import BeforeAfter from "@/components/components/BeforeAfter";
import Clinic from "@/components/components/Clinic";
import WhyChooseUs from "@/components/components/WhyChooseUs";
import Appointment from "@/components/components/Appointment";
import Footer from "@/components/components/Footer";
import Map from "@/components/components/Map";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutDoctor />
      <Services />
      <BeforeAfter />
      <Clinic />
      <WhyChooseUs />
      <Appointment />
      <Map/>
      <Footer />
    </main>
  );
}