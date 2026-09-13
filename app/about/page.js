import Navbar from "@/components/components/Navbar";
import AboutDoctor from "@/components/components/AboutDoctor";
import Clinic from "@/components/components/Clinic";
import WhyChooseUs from "@/components/components/WhyChooseUs";
import Footer from "@/components/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <AboutDoctor />
        <Clinic />
        <WhyChooseUs />
      </div>

      <Footer />
    </main>
  );
}