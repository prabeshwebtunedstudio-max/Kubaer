
//faqs/new/page.js
"use client";

import { useRouter } from "next/navigation";

export default function NewFaqPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFaq = {
      question: formData.get("question"),
      answer: formData.get("answer"),
    };

    console.log("New FAQ Submitted:", newFaq);

    // ✅ Later you can send to backend with fetch/axios
    // await fetch("/api/faqs", { method: "POST", body: JSON.stringify(newFaq) });

    router.push("/admin/dashboard/faqs"); // Redirect back to FAQ list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New FAQ</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question</label>
          <input type="text" name="question" required />
        </div>
        <div className="form-group">
          <label>Answer</label>
          <textarea name="answer" rows="4" required></textarea>
        </div>
        <div className="form-actions" style={{ marginTop: "10px" }}>
          <button type="submit" className="btn-primary">Save</button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => router.push("/admin/dashboard/faqs")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
