
//admin/dashnoard/faqs/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FaqsPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function loadFaqs() {
      const res = await fetch("/api/faqs");
      const data = await res.json();
      if (data.success) setFaqs(data.data);
    }
    loadFaqs();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>FAQs</h1>
      <Link href="/admin/dashboard/faqs/new">
        <button className="btn-primary">➕ Add New FAQ</button>
      </Link>

      <ul style={{ marginTop: "20px" }}>
        {faqs.map((faq) => (
          <li key={faq._id} style={{ marginBottom: "15px" }}>
            <strong>Q:</strong> {faq.question} <br />
            <strong>A:</strong> {faq.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
