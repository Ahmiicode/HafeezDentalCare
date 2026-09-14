import Navbar from "@/components/components/Navbar";
import BeforeAfter from "@/components/components/BeforeAfter";
import Appointment from "@/components/components/Appointment";
import Footer from "@/components/components/Footer";

export default function ResultsPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24  bg-white">
        <BeforeAfter />
        <Appointment />
      </div>

      <Footer />
    </main>
  );
}