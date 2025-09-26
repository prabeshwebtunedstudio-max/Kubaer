import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessLoan from "./BusinessLoan";

export default function Business() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <BusinessLoan />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
