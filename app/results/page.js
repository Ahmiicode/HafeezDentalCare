import Navbar from "@/components/components/Navbar";
import Services from "@/components/components/Services";
import Appointment from "@/components/components/Appointment";
import Footer from "@/components/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <Services />
        <Appointment />
      </div>

      <Footer />
    </main>
  );
}