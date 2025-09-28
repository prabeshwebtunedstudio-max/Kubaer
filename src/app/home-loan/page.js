"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomeLoanPage() {
  return (
      <div className="container mx-auto px-4 py-12">
        <Navbar/>
      {/* 1. Introduction */}
      <section className="mb-10 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">
          Loans for First Home Buyers
        </h1>
        <p className="text-gray-700">
          Embarking on the journey to buy your first home in Australia is an
          exciting milestone. It’s also a significant financial commitment, and
          understanding the landscape is key. The Australian government, along
          with state and territory governments, offers various initiatives to
          support eligible first home buyers, aiming to make homeownership more
          accessible. These schemes can often help reduce the required deposit
          or minimise additional costs, paving the way for you to step onto the
          property ladder sooner. We're here to demystify these opportunities
          and help you navigate them with confidence.
        </p>
      </section>

      {/* 2. Types of Loans & Government Support */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Types of First Home Buyer Loans & Government Support
        </h2>
        <p className="text-gray-700 mb-4">
          Navigating the world of home loans can feel overwhelming, but for
          first homebuyers in Australia, there are tailored options and
          government schemes designed to ease the path.
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Standard Variable Rate Loans:</strong> Interest rate fluctuates with market conditions. Flexible with extra repayments and redraw facilities.</li>
          <li><strong>Fixed Rate Loans:</strong> Lock in your interest rate for a set period, providing repayment certainty regardless of market shifts.</li>
          <li><strong>Split Loans:</strong> Combine fixed and variable portions, balancing certainty and flexibility.</li>
          <li><strong>Guarantor Loans:</strong> Family member offers property equity as security, helping enter the market with a smaller deposit and potentially avoiding Lenders Mortgage Insurance (LMI).</li>
          <li><strong>Low-Doc/Alt-Doc Loans:</strong> Designed for self-employed or non-traditional income earners, offering flexible documentation requirements, though interest rates may be higher.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-purple-500">
          Key Government Initiatives
        </h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Home Guarantee Scheme (HGS):</strong> Includes First Home Buyer Guarantee, Regional First Home Buyer Guarantee, and Family Home Guarantee.</li>
          <li><strong>First Home Owner Grant (FHOG):</strong> One-off grant offered by state/territory governments for eligible buyers of new homes.</li>
          <li><strong>First Home Super Saver (FHSS) Scheme:</strong> Save for your first home inside superannuation with concessional tax benefits.</li>
          <li><strong>Help to Buy Scheme (Coming Soon):</strong> Shared equity scheme where government contributes to purchase price.</li>
        </ul>
      </section>

      {/* 3. Lenders */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Lenders We Deal With
        </h2>
        <p className="text-gray-700 mb-4">
          At Kubaer Finance, we pride ourselves on our extensive network of
          reputable lenders across Australia. We partner with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Major Banks:</strong> Commonwealth Bank, Westpac, NAB, ANZ</li>
          <li><strong>Second-Tier Lenders:</strong> Macquarie Bank, ING, Suncorp, Bendigo & Adelaide Bank, Bank of Queensland, etc.</li>
          <li><strong>Non-Bank Lenders:</strong> Firstmac, Pepper Money, Athena, and others.</li>
          <li><strong>Credit Unions & Mutual Banks:</strong> Member-focused institutions offering competitive rates and personalised service.</li>
        </ul>
      </section>

      {/* 4. Home Loan Journey */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Your Home Loan Journey with Us
        </h2>
        <ul className="list-decimal pl-6 text-gray-700 space-y-2">
          <li><strong>Initial Consultation & Needs Assessment:</strong> We understand your goals and financial situation.</li>
          <li><strong>Eligibility Check & Pre-Approval:</strong> Assess eligibility for loans & grants, secure pre-approval.</li>
          <li><strong>Loan Structuring & Comparison:</strong> Compare suitable products from our lender panel.</li>
          <li><strong>Application & Submission:</strong> Guide you through documentation and submit application.</li>
          <li><strong>Lender Liaison & Approval:</strong> Communicate with lender to track progress and approvals.</li>
          <li><strong>Settlement Support:</strong> Coordinate with conveyancer/solicitor and lender for smooth settlement.</li>
          <li><strong>Ongoing Support:</strong> Future reviews, questions, or changing financial needs.</li>
        </ul>
      </section>

      {/* 5. Client Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">
          Client Testimonials
        </h2>
        <div className="space-y-6 text-gray-700">
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            "As first home buyers, the process seemed daunting. Kubaer Finance
            made it incredibly simple, explaining every step and helping us
            secure the First Home Buyer Guarantee. We wouldn't be in our dream
            home without them!" – Sarah & Tom, Sydney NSW
          </blockquote>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic">
            "I was struggling to understand all the government schemes, but
            Kubaer Finance patiently walked me through everything. They found
            me a fantastic loan and handled all the paperwork. Highly recommend!"
            – Michael P., Melbourne VIC
          </blockquote>
        </div>
      </section>
        {/* 6. Call to Action */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">
          Ready to Optimise Your Loan?
        </h2>
        <p className="text-gray-700 mb-6">
          Speak to our experts today and find out how much you could save by refinancing your home loan.
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
