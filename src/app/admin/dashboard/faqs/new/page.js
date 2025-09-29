
// //faqs/new/page.js
// "use client";

// import { useRouter } from "next/navigation";

// export default function NewFaqPage() {
//   const router = useRouter();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData(e.target);
//   //   const newFaq = {
//   //     question: formData.get("question"),
//   //     answer: formData.get("answer"),
//   //   };

//   //   console.log("New FAQ Submitted:", newFaq);

//     // ✅ Later you can send to backend with fetch/axios
//     // await fetch("/api/faqs", { method: "POST", body: JSON.stringify(newFaq) });

//     const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const newFaq = {
//     question: formData.get("question"),
//     answer: formData.get("answer"),
//   };

//   try {
//     const res = await fetch("/api/faqs", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newFaq),
//     });

//     if (!res.ok) throw new Error("Failed to save FAQ");

//     console.log("✅ FAQ saved!");
//     router.push("/admin/dashboard/faqs"); // redirect
//   } catch (err) {
//     console.error("❌ Error saving FAQ:", err);
//   }
// };


//     router.push("/admin/dashboard/faqs"); // Redirect back to FAQ list
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Add New FAQ</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Question</label>
//           <input type="text" name="question" required />
//         </div>
//         <div className="form-group">
//           <label>Answer</label>
//           <textarea name="answer" rows="4" required></textarea>
//         </div>
//         <div className="form-actions" style={{ marginTop: "10px" }}>
//           <button type="submit" className="btn-primary">Save</button>
//           <button
//             type="button"
//             className="btn-secondary"
//             onClick={() => router.push("/admin/dashboard/faqs")}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );


// src/app/admin/dashboard/faqs/new/page.js
"use client";

import { useRouter } from "next/navigation";

export default function NewFaqPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFaq = {
      question: formData.get("question"),
      answer: formData.get("answer"),
    };

    try {
      const res = await fetch("/api/faqs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFaq),
      });

      if (!res.ok) throw new Error("Failed to save FAQ");

      console.log("✅ FAQ saved!");
      router.push("/admin/dashboard/faqs"); // Redirect back to FAQ list
    } catch (err) {
      console.error("❌ Error saving FAQ:", err);
    }
  };

  // ✅ return must be INSIDE the component
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
