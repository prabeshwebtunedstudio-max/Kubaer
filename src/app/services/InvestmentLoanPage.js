import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvestmentLoan from "./InvestmentLoan";

export default function Investment() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <InvestmentLoan />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
