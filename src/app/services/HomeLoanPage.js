import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLoan from "./HomeLoan";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <HomeLoan />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
