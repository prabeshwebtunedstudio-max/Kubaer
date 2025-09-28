"use client";
import { useState } from "react";

export default function FaqComponent() {
    const faqCategories = {
        General: [
            {
                question: "How do you compare and choose the right home loan for me?",
                answer:
                    "There are a few processes we undertake to determine the right solutions. We also try and give you 3 options to consider so you can see a range of different lenders that suit your needs. But the critical aspects are: Who can provide you with the best policies, income assessment and guidelines that suit your income or employment type for example What lender has the best price depending on your deposit size, your equity position, or your loan purpose. Did you know that Investment loans and owner occupied loans have different interest rates for example. The right finance option for you goes beyond who has the cheapest interest rate online. If that's all that went into it, you would just do it yourself. Policy is just as important as price in a lot of cases.",
            },
        ],
        Loans: [
            {
                question: "What is a Mortgage?",
                answer:
                    "A mortgage is a loan specifically for purchasing property, where the property itself acts as collateral. Failing to make payments may result in the lender taking ownership of the property.",
            },
            {
                question: "What is Borrowing Capacity?",
                answer:
                    "Borrowing capacity is the maximum amount a lender will allow you to borrow based on your income, expenses, and other financial commitments.",
            },
        ],
        Refinancing: [
            {
                question: "What is Refinancing?",
                answer:
                    "Refinancing means replacing your current loan with a new one, usually to get a better interest rate or modify repayment terms. It can save money over the life of the loan.",
            },
        ],
        Taxes: [
            {
                question: "What is Stamp Duty?",
                answer:
                    "Stamp duty is a government tax applied when you purchase property. The amount varies by property value and location.",
            },
        ],
    };

    // Create categories including "All"
    const categories = ["All", ...Object.keys(faqCategories)];
    const [activeTab, setActiveTab] = useState(categories[0]);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Flatten all FAQs if "All" is selected
    const currentFaqs =
        activeTab === "All"
            ? Object.values(faqCategories).flat()
            : faqCategories[activeTab];

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 py-16 flex flex-col gap-[60px]">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Do you need information about different financial terms or guidance
                        on starting your home loan journey?
                    </p>
                </div>

                {/* Tabs */}
                <div className="w-full rounded-full p-[2px] bg-gradient-to-r from-[#86489B] to-[#F171AC]">
                    <div className="flex justify-between items-center bg-white rounded-full px-1 py-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveTab(category);
                                    setOpenIndex(null);
                                }}
                                style={{ borderRadius: '30px' }}
                                className={`flex-1 text-sm font-medium text-center px-4 py-2 transition 
                ${activeTab === category
                                        ? "bg-gradient-to-r from-[#86489B] to-[#F171AC] text-white"
                                        : "text-gray-500 hover:text-[#86489B] hover:font-bold"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="flex flex-col gap-[20px]">
                    {currentFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden shadow-[0_4px_15px_rgba(134,72,155,0.15)] hover:shadow-[0_6px_20px_rgba(241,113,172,0.25)] transition-shadow duration-300 bg-white"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center px-4 pt-4 text-left cursor-pointer focus:outline-none"
                            >
                                <span
                                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${openIndex === index ? "text-[#86489B]" : "text-gray-800"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className={`text-2xl font-bold transition-transform duration-300 ${openIndex === index
                                        ? "rotate-45 text-[#86489B]"
                                        : "text-gray-400"
                                        }`}
                                >
                                    +
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`px-4 pb-4 text-gray-600 text-sm md:text-base overflow-hidden transition-all duration-500 border-t border-gray-200 ${openIndex === index
                                    ? "max-h-96 opacity-100 mt-2"
                                    : "max-h-0 opacity-0 mt-0"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
