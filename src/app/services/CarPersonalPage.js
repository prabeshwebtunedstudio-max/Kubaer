import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarPersonalLoan from "./CarPersonalLoan";

export default function CarPersonal() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <CarPersonalLoan />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
