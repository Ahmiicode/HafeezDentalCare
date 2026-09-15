import Navbar from "@/components/components/Navbar";

import Appointment from "@/components/components/Appointment";
import Footer from "@/components/components/Footer";

export default function ResultsPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24  bg-white">
        
        <Appointment />
      </div>

      <Footer />
    </main>
  );
}