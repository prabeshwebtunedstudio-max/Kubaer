import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from 'lucide-react';
import Link from "next/link";

const otherBlogs = [
    {
        id: 1,
        title: "Understanding Home Loans",
        image: "/assets/img/founder.png",
        date: "Sep 28, 2025",
    },
    {
        id: 2,
        title: "Smart Real Estate Investment Tips",
        image: "/assets/img/landing-image.jpg",
        date: "Sep 20, 2025",
    },
    {
        id: 3,
        title: "Top 5 Mistakes to Avoid as a Buyer",
        image: "/assets/img/hero-image.jpg",
        date: "Sep 15, 2025",
    },
];

export default function BlogDetailComponent() {
    return (
        <>
            {/* Header */}
            <Navbar />

            {/* Blog Detail Content Section */}
            <section className="bg-white">
                {/* Hero Section */}
                <div className="relative w-full h-[250px] md:h-[300px]">
                    <Image
                        src="/assets/img/founder.png"
                        alt="Weekly vs Fortnightly vs Monthly Home Loan Repayments"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col gap-[10px] justify-center items-center text-center px-4">
                        <span className="bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Refinance
                        </span>
                        <div className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
                            Understanding Home Loans
                        </div>
                        <span className="text-md text-white mb-2 flex items-center gap-[5px]">
                            <Calendar className="h-3 w-3" />
                            <span>Sep 28, 2025</span>
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        {/* Main Content - 8/12 */}
                        <div className="col-span-12 lg:col-span-8 prose text-gray-700 py-6 px-4">
                            <p>
                                When it comes to paying off your home loan, the frequency of your
                                repayments can make a surprising difference. Whether you’re just
                                starting your mortgage journey or wondering about ways to reduce
                                interest, understanding the impact of weekly, fortnightly, and monthly
                                repayments is essential.
                            </p>

                            <div className="text-[34px] font-medium pb-2 bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                                Understanding Repayment
                            </div>

                            <p>
                                Consequat esse magna minim voluptate do duis fugiat quis deserunt ipsum Lorem tempor...
                            </p>

                            <h3>Fortnightly Repayments</h3>
                            <p>
                                Fortnightly payments are made every two weeks. This method usually
                                results in an extra payment each year, helping you pay off your loan
                                faster.
                            </p>

                            <h3>Monthly Repayments</h3>
                            <p>
                                Monthly repayments are the most common. While convenient, they might
                                result in paying slightly more interest compared to weekly or
                                fortnightly options.
                            </p>

                            <h4>Key Takeaways</h4>
                            <ul>
                                <li>Smaller frequent payments can reduce total interest.</li>
                                <li>Fortnightly repayments often result in one extra payment annually.</li>
                                <li>Monthly repayments are easy but may cost slightly more in interest.</li>
                            </ul>
                        </div>

                        {/* Sidebar / Secondary Content - 4/12 */}
                        <div className="col-span-12 lg:col-span-4 prose text-gray-700 py-6 px-4 bg-[#FDF2F9]">
                            <div className="text-[30px] font-semibold mb-4 pb-2 bg-gradient-to-r from-[#86489B] to-[#F171AC] bg-clip-text text-transparent">
                                Other Blogs
                            </div>

                            <ul className="p-0">
                                {otherBlogs.map((blog) => (
                                    <li key={blog.id} className="flex items-center gap-3 hover:bg-white p-2 rounded transition cursor-pointer">
                                        <div className="w-16 h-12 relative flex-shrink-0">
                                            <Image src={blog.image} alt={blog.title} fill className="object-cover rounded" />
                                        </div>
                                        <div>
                                            <Link
                                                href={`/BlogList/${blog.id}`}
                                                className="text-sm font-medium text-[#86489B] hover:text-[#F171AC] transition"
                                            >
                                                {blog.title.length > 40 ? blog.title.slice(0, 40) + "..." : blog.title}
                                            </Link>
                                            <div className="text-xs text-gray-500">{blog.date}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
