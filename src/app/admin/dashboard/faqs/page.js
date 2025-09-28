
//faqs/page.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function FaqsPage() {
  const [faqs, setFaqs] = useState([
    { question: "What is KUBAER FINANCE?", answer: "We provide loan services." },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>FAQs</h1>
      <Link href="/admin/dashboard/faqs/new">
        <button className="btn-primary">➕ Add New FAQ</button>
      </Link>

      <ul style={{ marginTop: "20px" }}>
        {faqs.map((faq, i) => (
          <li key={i} style={{ marginBottom: "15px" }}>
            <strong>Q:</strong> {faq.question} <br />
            <strong>A:</strong> {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
