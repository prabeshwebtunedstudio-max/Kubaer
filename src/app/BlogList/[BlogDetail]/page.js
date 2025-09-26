import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogDetailComponent from "./BlogDetailCompoentn";

export default function BlogDetail() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Content Starts */}
            <main className="flex-grow">
                <BlogDetailComponent />
            </main>
            {/* Content Ends */}

            <Footer />
        </div>
    );
}
