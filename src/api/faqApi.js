// src/api/faqApi.js
export const getFaqs = async () => {
  const res = await fetch("/api/faqs");
  if (!res.ok) throw new Error("Failed to fetch FAQs");
  return res.json();
};

export const createFaq = async (faq) => {
  const res = await fetch("/api/faqs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(faq),
  });

  if (!res.ok) throw new Error("Failed to create FAQ");
  return res.json();
};

export const updateFaq = async (id, faq) => {
  const res = await fetch(`/api/faqs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(faq),
  });

  if (!res.ok) throw new Error("Failed to update FAQ");
  return res.json();
};

export const deleteFaq = async (id) => {
  const res = await fetch(`/api/faqs/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete FAQ");
  return res.json();
};
