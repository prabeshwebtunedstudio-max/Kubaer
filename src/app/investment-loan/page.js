"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InvestmentLoan() {
  return (
    <div className="container mx-auto px-4 py-12">
        <Navbar />
      {/* 1. Introduction */}
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          Introduction to Investment Property Loans in Australia
        </h1>
        <p className="text-gray-700">
          Investing in property is one of the most effective ways to build long-term wealth in Australia.
          Whether you're purchasing your first investment property or expanding your portfolio, the right
          loan structure can make a significant difference to your cash flow and tax strategy.
        </p>
        <p className="text-gray-700 mt-2">
          At Kubaer Finance, we help both new and seasoned investors navigate the complexities of
          investment lending, including loan structuring, interest-only options, and equity access—
          all while comparing offers from over 35+ lenders.
        </p>
      </section>

      {/* 2. Types of Investment Property Loans */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Types of Investment Property Loans
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Interest-Only Loans:</strong> Pay interest only for a set period (typically 1–5 years) 
            to maximise cash flow and tax-deductible interest.
          </li>
          <li>
            <strong>Principal & Interest Loans:</strong> Pay down both principal and interest to build equity 
            while managing long-term costs.
          </li>
          <li>
            <strong>Fixed or Variable Rate Loans:</strong> Choose between rate stability (fixed) or flexibility (variable), 
            or split the loan to enjoy both benefits.
          </li>
          <li>
            <strong>Equity Release:</strong> Use the equity in your existing home or investment to fund a new purchase 
            without needing a full deposit.
          </li>
          <li>
            <strong>Family Equity Investment Loans:</strong> Leverage a family member’s equity to help you start your 
            investment journey sooner.
          </li>
        </ul>
      </section>

      {/* 3. Lenders */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Lenders We Work With
        </h2>
        <p className="text-gray-700 mb-4">
          We compare loan options across a wide panel of investment-friendly lenders, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Major Banks:</strong> NAB, ANZ, Westpac, CBA</li>
          <li><strong>Non-Bank Lenders:</strong> Resimac, Pepper, Liberty</li>
          <li><strong>Investor-Focused Banks:</strong> Macquarie Bank, ING</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Every lender has different policies on rental income, negative gearing, and interest-only periods —
          we help you find the right fit for your investment strategy.
        </p>
      </section>

      {/* 4. Investment Loan Journey */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Your Investment Loan Journey with Kubaer Finance
        </h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Step 1: Strategy Session:</strong> Assess investment goals, income, and long-term vision.
          </li>
          <li>
            <strong>Step 2: Assess Borrowing Capacity:</strong> Calculate how much you can borrow based on rental income and liabilities.
          </li>
          <li>
            <strong>Step 3: Pre-Approval:</strong> Submit application to a lender suited to investment needs, including interest-only or high-LVR loans.
          </li>
          <li>
            <strong>Step 4: Property Review:</strong> Liaise with your agent or buyer’s advocate to review the property’s yield and structure.
          </li>
          <li>
            <strong>Step 5: Settlement:</strong> Coordinate with solicitors and lender to ensure smooth and timely settlement.
          </li>
          <li>
            <strong>Step 6: Ongoing Investment Support:</strong> Review your loan annually and assist with future purchases, refinancing, or portfolio expansion.
          </li>
        </ul>
      </section>

      {/* 5. Investor Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          What Our Investor Clients Say
        </h2>
        <div className="space-y-6 text-gray-700">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            "Kubaer Finance helped us structure our first investment loan perfectly. We’ve already added a second property to our portfolio." – Suresh & Reena, Campbelltown
          </blockquote>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            "They explained interest-only loans and tax strategies in a way I could understand. I’ve recommended them to friends already." – Michael T., Seaton
          </blockquote>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            "The team found an investor-friendly lender and made sure my equity was used wisely. The whole process was smooth." – Ayesha K., Northfield
          </blockquote>
        </div>
      </section>
        {/* 6. Call to Action */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Ready to Optimise Your Loan?
        </h2>
        <p className="text-gray-700 mb-6">
          Speak to our experts today and find out how much you could save by refinancing your Investment loan.
        </p>
        <a
          href="/contact"
          className="btn-default px-6 py-3 rounded-md text-white bg-purple-700 hover:bg-purple-800 transition duration-300"
        >
          Book Your Discovery Call
        </a>
      </section>
    </div>
  );
}
