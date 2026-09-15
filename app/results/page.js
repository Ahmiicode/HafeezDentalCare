import Navbar from "@/components/components/Navbar";
import Services from "@/components/components/Services";
import Appointment from "@/components/components/Appointment";
import Footer from "@/components/components/Footer";
import BeforeAfter from "@/components/components/BeforeAfter";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24  bg-white">
        <BeforeAfter/>
        <Services />
        <Appointment />
      </div>

      <Footer />
    </main>
  );
}