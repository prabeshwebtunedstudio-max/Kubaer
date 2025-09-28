// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Logo from "../../public/assets/img/new-logo.png";
// import "../../public/assets/css/custom.css";
// import "../../public/assets/css/navbar.css";
// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [servicesOpen, setServicesOpen] = useState(false);
//     const [calculatorOpen, setCalculatorOpen] = useState(false);

//     return (
//         <header className="main-header">
//             <nav className="navbar">
//                 <div className="container d-flex justify-between items-center">
//                     {/* Logo */}
//                     <Link href="/" className="navbar-brand">
//                         <Image src={Logo} alt="Logo" width={150} height={50} />
//                     </Link>

//                     {/* Mobile Toggle */}
//                     <button
//                         className="mobile-toggle d-lg-none"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         aria-label="Toggle Menu"
//                     >
//                         <span className="bar"></span>
//                         <span className="bar"></span>
//                         <span className="bar"></span>
//                     </button>

//                     {/* Menu */}
//                     <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
//                         <ul className="nav-list">
//                             {/* Services Dropdown */}
//                             <li className={`has-dropdown ${servicesOpen ? "open" : ""}`}>
//                                 <button
//                                     className="dropdown-toggle"
//                                     onClick={() => setServicesOpen(!servicesOpen)}
//                                 >
//                                     Services <span>{servicesOpen ? "–" : "+"}</span>
//                                 </button>
//                                 {servicesOpen && (
//                                     <ul className="dropdown">
//                                         <li><Link href="#">Home Loan</Link></li>
//                                         <li><Link href="#">Investment Loan</Link></li>
//                                         <li><Link href="#">Car & Personal Loan</Link></li>
//                                         <li><Link href="#">SMSF Loan</Link> </li>
//                                         <li> <Link href="#">Refinancing</Link> </li>
//                                         <li> <Link href="#">Business Loan</Link> </li>
//                                     </ul>
//                                 )}
//                             </li>

//                             {/* Calculator Dropdown */}
//                             <li className={`has-dropdown ${calculatorOpen ? "open" : ""}`}>
//                                 <button
//                                     className="dropdown-toggle"
//                                     onClick={() => setCalculatorOpen(!calculatorOpen)}
//                                 >
//                                     Calculator <span>{calculatorOpen ? "–" : "+"}</span>
//                                 </button>
//                                 {calculatorOpen && (
//                                     <ul className="dropdown">
//                                         <li><Link href="#">Stamp Duty</Link></li>
//                                         <li><Link href="#">Refinancing</Link></li>
//                                         <li><Link href="#">Borrowing Capacity</Link></li>
//                                     </ul>
//                                 )}
//                             </li>

//                             {/* Other Links */}
//                             <li><Link href="/about">About Us</Link></li>
//                             <li><Link href="/BlogList">Blog</Link></li>
//                             <li><Link href="/faq">FAQs</Link></li>
//                             <li><Link href="/contact">Contact Us</Link></li>
//                         </ul>

//                         {/* Call Button */}
//                         <div className="header-btn mt-3 mt-lg-0">
//                             <a href="tel:1300Kubaer" className="extra-btn btn-default">
//                                 1300 Kubaer
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

          
//         </header>
//     );
// };

// export default Navbar;



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Logo from "../../public/assets/img/new-logo.png";
// import "../../public/assets/css/custom.css";
// import "../../public/assets/css/navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [calculatorOpen, setCalculatorOpen] = useState(false);

//   return (
//     <header className="main-header">
//       <nav className="navbar">
//         <div className="container d-flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="navbar-brand">
//             <Image src={Logo} alt="Logo" width={150} height={50} />
//           </Link>

//           {/* Mobile Toggle */}
//           <button
//             className="mobile-toggle d-lg-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </button>

//           {/* Menu */}
//           <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
//             <ul className="nav-list">
//               {/* Services Dropdown */}
//               <li
//                 className={`has-dropdown ${
//                   servicesOpen ? "open" : ""
//                 }`}
//                 onClick={() => setServicesOpen(!servicesOpen)} // Mobile only
//               >
//                 <button className="dropdown-toggle">
//                   Services <span>{servicesOpen ? "–" : "+"}</span>
//                 </button>
//                 <ul className="dropdown">
//                   <li><Link href="/home-loan" className="headshake">Home Loan</Link></li>
//                   <li><Link href="investment-loan" className="headshake">Investment Loan</Link></li>
//                   <li><Link href="/car-personal-loan" className="headshake">Car & Personal Loan</Link></li>
//                   <li><Link href="smsf-loan" className="headshake">SMSF Loan</Link></li>
//                   <li><Link href="/refinancing" className="headshake">Refinancing</Link></li>
//                   <li><Link href="/business-loan" className="headshake">Business Loan</Link></li>
//                 </ul>
//               </li> 

//               {/* Calculator Dropdown */}
//               <li
//                 className={`has-dropdown ${
//                   calculatorOpen ? "open" : ""
//                 }`}
//                 onClick={() => setCalculatorOpen(!calculatorOpen)} // Mobile only
//               >
//                 <button className="dropdown-toggle">
//                   Calculator <span>{calculatorOpen ? "–" : "+"}</span>
//                 </button>
//                 <ul className="dropdown">
//                   <li><Link href="/stamp-duty" className="headshake">Stamp Duty</Link></li>
//                   <li><Link href="/calc-refinacnig" className="headshake">Refinancing</Link></li>
//                   <li><Link href="/borrow-capacity" className="headshake">Borrowing Capacity</Link></li>
//                   <li><Link href="/repayment" className="headshake">Repayments</Link> </li>
//                   <li><Link href="/loan-comparison" className="headshake">Loan Comparison</Link></li>
//                   <li><Link href="/budget-planner" className="headshake">Budget Planner</Link> </li>
//                 </ul>
//               </li>

//               {/* Other Links */}
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/BlogList">Blog</Link></li>
//               <li><Link href="/faq">FAQs</Link></li>
//               <li><Link href="/contact">Contact Us</Link></li>
//             </ul>

//             {/* Call Button */}
//             <div className="header-btn mt-3 mt-lg-0">
//               <a href="tel:1300Kubaer" className="extra-btn btn-default">
//                 1300 Kubaer
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import Logo from "../../public/assets/img/new-logo.png";
// import { FaUserCircle } from "react-icons/fa"; // using react-icons
// import "../../public/assets/css/custom.css";
// import "../../public/assets/css/navbar.css";
// import "../../public/assets/css/auth.css"; // shared styles for login/signup
// import Login from "./auth/Login";
// import Signup from "./auth/Signup";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [calculatorOpen, setCalculatorOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false); // modal state
//   const [isLogin, setIsLogin] = useState(true); // toggle login/signup

//   return (
//     <header className="main-header">
//       <nav className="navbar">
//         <div className="container d-flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="navbar-brand">
//             <Image src={Logo} alt="Logo" width={150} height={50} />
//           </Link>

//           {/* Mobile Toggle */}
//           <button
//             className="mobile-toggle d-lg-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </button>

//           {/* Menu */}
//           <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
//             <ul className="nav-list">
//               {/* Services Dropdown */}
//               <li
//                 className={`has-dropdown ${servicesOpen ? "open" : ""}`}
//                 onClick={() => setServicesOpen(!servicesOpen)}
//               >
//                 <button className="dropdown-toggle">
//                   Services <span>{servicesOpen ? "–" : "+"}</span>
//                 </button>
//                 <ul className="dropdown">
//                   <li><Link href="/home-loan" className="headshake">Home Loan</Link></li>
//                   <li><Link href="/investment-loan" className="headshake">Investment Loan</Link></li>
//                   <li><Link href="/car-personal-loan" className="headshake">Car & Personal Loan</Link></li>
//                   <li><Link href="/smsf-loan" className="headshake">SMSF Loan</Link></li>
//                   <li><Link href="/refinancing" className="headshake">Refinancing</Link></li>
//                   <li><Link href="/business-loan" className="headshake">Business Loan</Link></li>
//                 </ul>
//               </li> 

//               {/* Calculator Dropdown */}
//               <li
//                 className={`has-dropdown ${calculatorOpen ? "open" : ""}`}
//                 onClick={() => setCalculatorOpen(!calculatorOpen)}
//               >
//                 <button className="dropdown-toggle">
//                   Calculator <span>{calculatorOpen ? "–" : "+"}</span>
//                 </button>
//                 <ul className="dropdown">
//                   <li><Link href="/stamp-duty" className="headshake">Stamp Duty</Link></li>
//                   <li><Link href="/calc-refinacnig" className="headshake">Refinancing</Link></li>
//                   <li><Link href="/borrow-capacity" className="headshake">Borrowing Capacity</Link></li>
//                   <li><Link href="/repayment" className="headshake">Repayments</Link></li>
//                   <li><Link href="/loan-comparison" className="headshake">Loan Comparison</Link></li>
//                   <li><Link href="/budget-planner" className="headshake">Budget Planner</Link></li>
//                 </ul>
//               </li>

//               {/* Other Links */}
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/BlogList">Blog</Link></li>
//               <li><Link href="/faq">FAQs</Link></li>
//               <li><Link href="/contact">Contact Us</Link></li>

//               {/* Account/Login Icon */}
//             <li>
//             <Link href="/auth" className="account-btn" aria-label="Login or Signup">
//             <FaUserCircle size={28} />
//             </Link>
//             </li>
//             </ul>

//             {/* Call Button */}
//             <div className="header-btn mt-3 mt-lg-0">
//               <a href="tel:1300Kubaer" className="extra-btn btn-default">
//                 1300 Kubaer
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//     </header>
//   );
// };

// export default Navbar;


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/assets/img/new-logo.png";
import { FaUserCircle } from "react-icons/fa"; // only user icon
import "../../public/assets/css/custom.css";
import "../../public/assets/css/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className="navbar">
        <div className="container d-flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image src={Logo} alt="Logo" width={150} height={50} />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Menu */}
          <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              {/* Services Dropdown */}
              <li className={`has-dropdown ${servicesOpen ? "open" : ""}`}
                  onClick={() => setServicesOpen(!servicesOpen)}>
                <button className="dropdown-toggle">
                  Services <span>{servicesOpen ? "–" : "+"}</span>
                </button>
                <ul className="dropdown">
                  <li><Link href="/home-loan" className="headshake"  >Home Loan</Link></li>
                  <li><Link href="/investment-loan" className="headshake" >Investment Loan</Link></li>
                  <li><Link href="/car-personal-loan" className="headshake" >Car & Personal Loan</Link></li>
                  <li><Link href="/smsf-loan" className="headshake" >SMSF Loan</Link></li>
                  <li><Link href="/refinancing" className="headshake" >Refinancing</Link></li>
                  <li><Link href="/business-loan" className="headshake" >Business Loan</Link></li>
                </ul>
              </li>

              {/* Calculator Dropdown */}
              <li className={`has-dropdown ${calculatorOpen ? "open" : ""}`}
                  onClick={() => setCalculatorOpen(!calculatorOpen)}>
                <button className="dropdown-toggle">
                  Calculator <span>{calculatorOpen ? "–" : "+"}</span>
                </button>
                <ul className="dropdown">
                  <li><Link href="/stamp-duty" className="headshake" >Stamp Duty</Link></li>
                  <li><Link href="/calc-refinacnig" className="headshake" >Refinancing</Link></li>
                  <li><Link href="/borrow-capacity" className="headshake" >Borrowing Capacity</Link></li>
                  <li><Link href="/repayment" className="headshake" >Repayments</Link></li>
                  <li><Link href="/loan-comparison" className="headshake" >Loan Comparison</Link></li>
                  <li><Link href="/budget-planner" className="headshake" >Budget Planner</Link></li>
                </ul>
              </li>

              {/* Other Links */}
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/BlogList">Blog</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>

              {/* Only User Account Icon */}
              <li>
                <Link href="/user" className="account-btn" aria-label="User Login/Signup">
                  <FaUserCircle size={28} />
                </Link>
              </li>
            </ul>

            {/* Call Button */}
            <div className="header-btn mt-3 mt-lg-0">
              <a href="tel:1300Kubaer" className="extra-btn btn-default">
                1300 Kubaer
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
