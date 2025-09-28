"use client";
import Link from "next/link";
import WhyChooseUs from "../why/page";


export default function ContactComponent() {
    return (
        <div className="container mx-auto px-4 py-12">

            {/* Contact Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                    Get in Touch
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    We’re here to help. Fill out the form or reach us via the contact information below.
                </p>
            </div>

            {/* Contact Form & Info */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Form: Left (8/12) */}
                <div className="md:col-span-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                    <p className="text-gray-600 mb-6">
                        Have questions or need assistance? Fill out the form and we’ll get back to you promptly.
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-gray-300 bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac]"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border border-gray-300 bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac]"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="border border-gray-300 bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac]"
                        />
                        <textarea
                            placeholder="Anything else you'd like us to know"
                            className="border border-gray-300 bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#f171ac]"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 text-white bg-[#f171ac] px-6 py-2 rounded-lg hover:bg-[#86489b] transition"
                        >
                            Submit Form
                        </button>
                    </form>
                </div>

                {/* Contact Info: Right (4/12) */}
                <div className="md:col-span-4">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                    <div className="space-y-2 text-gray-700">
                        <p>
                            <i className="fas fa-phone mr-2"></i>
                            <Link href="tel:1300889743" className="text-blue-600 hover:underline">1300 889 743</Link>
                        </p>
                        <p>
                            <i className="fas fa-globe mr-2"></i>
                            <Link href="tel:+6191941700" className="text-blue-600 hover:underline">+61 2 9194 1700</Link>
                        </p>
                        <p>
                            <i className="fas fa-fax mr-2"></i>
                            <Link href="tel:+61294754466" className="text-blue-600 hover:underline">+61 2 9475 4466</Link>
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-2"></i>
                            <Link href="mailto:info@homeloanexperts.com.au" className="text-blue-600 hover:underline">info@homeloanexperts.com.au</Link>
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold mt-8 mb-2 text-gray-800">Mailing Address</h3>
                    <p className="text-gray-700">PO Box 3726 Rhodes NSW 2138</p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Opening Hours</h3>
                    <p className="text-gray-700">Monday - Friday 8:00 AM - 6:00 PM</p>
                </div>
            </div>

            {/* Locations Section */}
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Branch Office Location", address: "Suite 1, Level 1, 120 Erina Street, Gosford NSW 2250" },
                    { title: "Head Office Location", address: "Suite 207, 3 Rider Boulevard, Rhodes NSW 2138" },
                    { title: "Central Asia Office", address: "Alaya Jawalakhel, Lalitpur, Nepal" }
                ].map((loc, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <h4 className="font-semibold text-gray-800 mb-2">{loc.title}</h4>
                        <p className="text-gray-600 mb-3">{loc.address}</p>
                        <Link href="#" className="text-blue-600 hover:underline font-medium">View Map</Link>
                    </div>
                ))}
            </div> */}

            {/* Why Choose Us */}
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Tough Loans Approver", desc: "Where other brokers have failed, we regularly get an approval from a reputable lender." },
                    { title: "Perfect Home Loan", desc: "We assess your finances holistically to tailor the perfect home loan for you." },
                    { title: "Fast Approval, Easy Process", desc: "We can help you navigate the often complex pre-approval and application process." }
                ].map((item, i) => (
                    <div key={i} className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <h5 className="font-semibold text-gray-800 mb-2">{item.title}</h5>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                ))}
            </div> */}

            <WhyChooseUs />

            {/* Feedback Section */}
            {/* <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Leave Us Any Feedback</h3>
                <p className="text-gray-600 mb-6">
                    We are committed to enhancing our services and ensuring a satisfying experience for our customers. Please submit any complaints or feedback using the form.
                </p>
                <Link href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                    Submit Feedback
                </Link>
            </div> */}
        </div>
    );
}
