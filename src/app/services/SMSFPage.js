import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SMSFLoan from "./SMSFLoan";

export default function SMSF() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <SMSFLoan />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
