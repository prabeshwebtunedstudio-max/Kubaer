"use client";
import Image from "next/image";
import WhiteLogo from "../../public/assets/img/white-logo.png";
import Picture_1 from "../../public/assets/img/Footer/Picture_1-removebg-preview.png";
import Picture_2 from "../../public/assets/img/Footer/Picture_2-removebg-preview.png";
import Picture_3 from "../../public/assets/img/Footer/Picture_3-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-8">
            {/* About Footer Start */}
            <div className="about-footer">
              <div className="footer__logo">
                <Image src={WhiteLogo} alt="Logo" width={150} height={50} />
              </div>

              <div>
                <p className="footer__description">
                  Kubaer Finance helps working families and migrants in Adelaide
                  secure home, car, and investment loans with personalised
                  guidance and expert financial strategies.
                </p>
              </div>

              {/* Footer Contact Box Start */}
              <div className="footer-contact-box">
                <div className="footer-contact-item">
                  <p>Call Us:</p>
                  <a href="tel:08 8166 2682">1300 KUBAER</a>
                </div>
                <div className="footer-contact-item">
                  <p>Email Us:</p>
                  <a href="mailto:loans@kubaer.com.au">loans@kubaer.com.au</a>
                </div>
                <div className="footer-contact-item">
                  <p>Location:</p>
                  <p>Plympton Park SA 5038, Australia</p>
                </div>
              </div>
              {/* Footer Contact Box End */}
            </div>
            {/* About Footer End */}
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-4">
            <div className="footer-quick-links">
              <div className="section-title">
                <h4 style={{ color: "white", fontWeight: 600 }}>Quick Links</h4>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">services</a></li>
                  <li><a href="#">resources</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4">
            <div className="footer-quick-links footer__services">
              <div className="section-title">
                <h4 style={{ color: "white", fontWeight: 600 }}>Services</h4>
              </div>
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home Loan</a></li>
                  <li><a href="#">Investment Loan</a></li>
                  <li><a href="#">Car & Personal Loan</a></li>
                  <li><a href="#">SMSF Loan</a></li>
                  <li><a href="#">Refinancing</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social / Newsletter */}
          <div className="col-lg-3 col-md-6">
            <div className="section-title">
              <h4 style={{ color: "white", fontWeight: 600 }}>Join our Community</h4>
            </div>

            <div className="footer-social-links">
              <p>Join Kubaer Finance for expert loans and trusted support.</p>

              {/* Newsletter Subscription */}
              <div className="newsletter">
                <form className="newsletter-form">
                  <div className="input-container">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="newsletter-input"
                    />
                    <button type="submit" className="arrow-btn">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>

              <ul>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-copyright-text">
                <p>Copyright © Kubaer Finance {currentYear}.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-images d-flex justify-content-center gap-3">
                <Image src={Picture_1} alt="Image 1" width={50} height={50} />
                <Image src={Picture_2} alt="Image 2" width={50} height={50} />
                <Image src={Picture_3} alt="Image 3" width={50} height={50} />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-design-text">
                <p>
                  Designed & Developed by{" "}
                  <a href="https://www.murphystechnology.com.au/" target="_blank" rel="noopener noreferrer">
                    Murphys Technology Pty Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
