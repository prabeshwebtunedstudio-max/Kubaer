import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Refinancing from "./Refinancing";

export default function Refinancing() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <Refinancing />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
