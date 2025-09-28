

// "use client";

// import { useState } from "react";
// import "../../../../styles/adminDashboard.css";



// export default function AdminDashboardPage() {
//   const [activeTab, setActiveTab] = useState("services");

//   const tabs = [
//     "Services",
//     "About Us",
//     "Blog",
//     "FAQs",
//     "Contact Us",
//     "How it Works",
//     "Awards",
//     "Why Choose Us",
//     "Testimonials",
//     "Message from Founder",
//     "Touch with Us",
//   ];

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="logo">KUBAER FINANCE</h2>
//         <ul className="sidebar-menu">
//           {tabs.map((tab) => (
//             <li
//               key={tab}
//               className={activeTab === tab ? "active" : ""}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         <header className="dashboard-header">
//           <h1>{activeTab}</h1>
//         </header>

//         <section className="dashboard-section">
//           <p>
//             Here you can create, edit, and delete content for{" "}
//             <strong>{activeTab}</strong>.
//           </p>
//           <div className="content-actions">
//             <button className="btn-primary">Add New {activeTab}</button>
//             <button className="btn-secondary">Edit {activeTab}</button>
//             <button className="btn-danger">Delete {activeTab}</button>
//           </div>
//           {/* You can replace the above with actual forms and tables */}
//         </section>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import "../../../../styles/adminDashboard.css";

// export default function AdminDashboardPage() {
//   const [activeTab, setActiveTab] = useState("Services");
//   const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

//   const tabs = [
//     "Services",
//     "About Us",
//     "Blog",
//     "FAQs",
//     "Contact Us",
//     "How it Works",
//     "Awards",
//     "Why Choose Us",
//     "Testimonials",
//     "Message from Founder",
//     "Touch with Us",
//   ];

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <h2 className="logo">KUBAER FINANCE</h2>
//         <ul className="sidebar-menu">
//           {tabs.map((tab) => (
//             <li
//               key={tab}
//               className={activeTab === tab ? "active" : ""}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         {/* Toggle Button */}
//         <button
//           className="sidebar-toggle"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "☰ Close" : "☰ Menu"}
//         </button>

//         <header className="dashboard-header">
//           <h1>{activeTab}</h1>
//         </header>

//         <section className="dashboard-section">
//           <p>
//             Here you can create, edit, and delete content for{" "}
//             <strong>{activeTab}</strong>.
//           </p>
//           <div className="content-actions">
//             <button className="btn-primary">Add New {activeTab}</button>
//             <button className="btn-secondary">Edit {activeTab}</button>
//             <button className="btn-danger">Delete {activeTab}</button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import "../../../../styles/adminDashboard.css";

// export default function AdminDashboardPage() {
//   const [activeTab, setActiveTab] = useState("Services");
//   const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

//   const tabs = [
//     "Services",
//     "About Us",
//     "Blog",
//     "FAQs",
//     "Contact Us",
//     "How it Works",
//     "Awards",
//     "Why Choose Us",
//     "Testimonials",
//     "Message from Founder",
//     "Touch with Us",
//   ];

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <h2 className="logo">KUBAER FINANCE</h2>
//           <button
//             className="sidebar-close"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         <ul className="sidebar-menu">
//           {tabs.map((tab) => (
//             <li
//               key={tab}
//               className={activeTab === tab ? "active" : ""}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         <header className="dashboard-header">
//           {!isOpen && (
//             <button
//               className="sidebar-open"
//               onClick={() => setIsOpen(true)}
//             >
//               ☰ Menu
//             </button>
//           )}
//           <h1>{activeTab}</h1>
//         </header>

//         <section className="dashboard-section">
//           <p>
//             Here you can create, edit, and delete content for{" "}
//             <strong>{activeTab}</strong>.
//           </p>
//           <div className="content-actions">
//             <button className="btn-primary">Add New {activeTab}</button>
//             <button className="btn-secondary">Edit {activeTab}</button>
//             <button className="btn-danger">Delete {activeTab}</button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// This works perfectly fine
// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react"; // ✅ import icons
// import "../../../../styles/adminDashboard.css";

// export default function AdminDashboardPage() {
//   const [activeTab, setActiveTab] = useState("Services");
//   const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
//   const [servicesOpen, setServicesOpen] = useState(false); // Services submenu toggle

//   const tabs = [
//     "Services",
//     "About Us",
//     "Blog",
//     "FAQs",
//     "Contact Us",
//     "How it Works",
//     "Awards",
//     "Why Choose Us",
//     "Testimonials",
//     "Message from Founder",
//     "Touch with Us",
//   ];

//   // Submenu for Services
//   const servicesSubmenu = [
//     "Home Loan",
//     "Investment Loan",
//     "Car & Personal Loan",
//     "SMSF Loan",
//     "Refinancing",
//     "Business Loan",
//   ];

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <h2 className="logo">KUBAER FINANCE</h2>
//           <button
//             className="sidebar-close"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         <ul className="sidebar-menu">
//           {tabs.map((tab) => (
//             <li
//               key={tab}
//               className={activeTab === tab ? "active" : ""}
//             >
//               {tab === "Services" ? (
//                 <>
//                   <div
//                     className="services-toggle"
//                     onClick={() => setServicesOpen(!servicesOpen)}
//                   >
//                     <span>Services</span>
//                     {servicesOpen ? (
//                       <ChevronUp size={18} />
//                     ) : (
//                       <ChevronDown size={18} />
//                     )}
//                   </div>

//                   {/* Submenu */}
//                   {servicesOpen && (
//                     <ul className="submenu">
//                       {servicesSubmenu.map((item) => (
//                         <li
//                           key={item}
//                           className={activeTab === item ? "active" : ""}
//                           onClick={() => setActiveTab(item)}
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               ) : (
//                 <span onClick={() => setActiveTab(tab)}>{tab}</span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         <header className="dashboard-header">
//           {!isOpen && (
//             <button
//               className="sidebar-open"
//               onClick={() => setIsOpen(true)}
//             >
//               ☰ Menu
//             </button>
//           )}
//           <h1>{activeTab}</h1>
//         </header>

//         <section className="dashboard-section">
//           <p>
//             Here you can create, edit, and delete content for{" "}
//             <strong>{activeTab}</strong>.
//           </p>
//           <div className="content-actions">
//             <button className="btn-primary">Add New {activeTab}</button>
//             <button className="btn-secondary">Edit {activeTab}</button>
//             <button className="btn-danger">Delete {activeTab}</button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react"; 
// import "../../../../styles/adminDashboard.css";

// export default function AdminDashboardPage() {
//   const [activeTab, setActiveTab] = useState("Services");
//   const [isOpen, setIsOpen] = useState(true); 
//   const [servicesOpen, setServicesOpen] = useState(false); 
//   const [faqFormOpen, setFaqFormOpen] = useState(false); // 👈 Added FAQ state

//   const tabs = [
//     "Services",
//     "About Us",
//     "Blog",
//     "FAQs",
//     "Contact Us",
//     "How it Works",
//     "Awards",
//     "Why Choose Us",
//     "Testimonials",
//     "Message from Founder",
//     "Touch with Us",
//   ];

//   const servicesSubmenu = [
//     "Home Loan",
//     "Investment Loan",
//     "Car & Personal Loan",
//     "SMSF Loan",
//     "Refinancing",
//     "Business Loan",
//   ];

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <div className="sidebar-header">
//           <h2 className="logo">KUBAER FINANCE</h2>
//           <button
//             className="sidebar-close"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         <ul className="sidebar-menu">
//           {tabs.map((tab) => (
//             <li
//               key={tab}
//               className={activeTab === tab ? "active" : ""}
//             >
//               {tab === "Services" ? (
//                 <>
//                   <div
//                     className="services-toggle"
//                     onClick={() => setServicesOpen(!servicesOpen)}
//                   >
//                     <span>Services</span>
//                     {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//                   </div>

//                   {servicesOpen && (
//                     <ul className="submenu">
//                       {servicesSubmenu.map((item) => (
//                         <li
//                           key={item}
//                           className={activeTab === item ? "active" : ""}
//                           onClick={() => setActiveTab(item)}
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </>
//               ) : (
//                 <span onClick={() => setActiveTab(tab)}>{tab}</span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         <header className="dashboard-header">
//           {!isOpen && (
//             <button
//               className="sidebar-open"
//               onClick={() => setIsOpen(true)}
//             >
//               ☰ Menu
//             </button>
//           )}
//           <h1>{activeTab}</h1>
//         </header>

//         <section className="dashboard-section">
//           <p>
//             Here you can create, edit, and delete content for{" "}
//             <strong>{activeTab}</strong>.
//           </p>
//           <div className="content-actions">
//             <button className="btn-primary">Add New {activeTab}</button>
//             <button className="btn-secondary">Edit {activeTab}</button>
//             <button className="btn-danger">Delete {activeTab}</button>
//           </div>
//         </section>

//         {/* FAQs Section */}
//         {activeTab === "FAQs" && faqFormOpen && (
//           <div className="faq-form">
//             <h2>Add New FAQ</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.target);
//                 const newFaq = {
//                   question: formData.get("question"),
//                   answer: formData.get("answer"),
//                 };
//                 console.log("New FAQ:", newFaq); 
//                 setFaqFormOpen(false); 
//               }}
//             >
//               <div className="form-group">
//                 <label>Question</label>
//                 <input type="text" name="question" required />
//               </div>
//               <div className="form-group">
//                 <label>Answer</label>
//                 <textarea name="answer" rows="4" required></textarea>
//               </div>
//               <div className="form-actions">
//                 <button type="submit" className="btn-primary">
//                   Save FAQ
//                 </button>
//                 <button
//                   type="button"
//                   className="btn-secondary"
//                   onClick={() => setFaqFormOpen(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


//admin/dashboard/page.js
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../../../../styles/adminDashboard.css";
import Link from "next/link"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("Services");
  const [isOpen, setIsOpen] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [faqFormOpen, setFaqFormOpen] = useState(false);

  // ✅ Store multiple FAQs
  const [faqs, setFaqs] = useState([]);

  const tabs = [
    "Services",
    "About Us",
    "Blog",
    "FAQs",
    "Contact Us",
    "How it Works",
    "Awards",
    "Why Choose Us",
    "Testimonials",
    "Message from Founder",
    "Touch with Us",
  ];

  const servicesSubmenu = [
    "Home Loan",
    "Investment Loan",
    "Car & Personal Loan",
    "SMSF Loan",
    "Refinancing",
    "Business Loan",
  ];

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <h2 className="logo">KUBAER FINANCE</h2>
          <button className="sidebar-close" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <ul className="sidebar-menu">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "active" : ""}>
              {tab === "Services" ? (
                <>
                  <div
                    className="services-toggle"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>Services</span>
                    {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {servicesOpen && (
                    <ul className="submenu">
                      {servicesSubmenu.map((item) => (
                        <li
                          key={item}
                          className={activeTab === item ? "active" : ""}
                          onClick={() => setActiveTab(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <span onClick={() => setActiveTab(tab)}>{tab}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          {!isOpen && (
            <button className="sidebar-open" onClick={() => setIsOpen(true)}>
              ☰ Menu
            </button>
          )}
          <h1>{activeTab}</h1>
        </header>

        <section className="dashboard-section">
          <p>
            Here you can create, edit, and delete content for{" "}
            <strong>{activeTab}</strong>.
          </p>

          <div className="content-actions">
  {activeTab === "FAQs" ? (
    <Link href="/admin/dashboard/faqs/new">
      <button className="btn-primary">Add New FAQ</button>
    </Link>
  ) : (
    <button className="btn-primary">Add New {activeTab}</button>
  )}
  <button className="btn-secondary">Edit {activeTab}</button>
  <button className="btn-danger">Delete {activeTab}</button>
</div>

        </section>
      </main>
    </div>
  );
}

