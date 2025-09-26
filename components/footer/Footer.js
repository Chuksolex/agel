// components/Footer.js
import "bootstrap/dist/css/bootstrap.min.css"; // ensure bootstrap is loaded
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container py-4">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-3">
            <h5>About Us</h5>
            <p>
              We are a company that builds amazing things with Next.js and
              Bootstrap.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About us
                </a>
              </li>
              <li>
                <a href="/distribution-centers" className="text-white text-decoration-none">
                  Distribution Centers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
            </ul>
            <h5>Policies</h5>
             <ul className="list-unstyled">
              <li>
                <a href="/terms-of-use" className="text-white text-decoration-none">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/will-call-policy" className="text-white text-decoration-none">
                  Will Call Policy
                </a>
              </li>
          </ul>
          </div>

            {/* Column 3  */}
          <div className="col-md-3 mb-3">
            <h5>Solutions</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/pro-services" className="text-white text-decoration-none">
                  Pro Services
                </a>
              </li>
              <li>
                <a href="/power-pay-financing" className="text-white text-decoration-none">
                  Power Pay Financing
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Youtube Channel
                </a>
              </li>
              </ul>


          </div>
             {/* Column 4 */}
          <div className="col-md-3 mb-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/contact-us" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/returns-damages-and-claims" className="text-white text-decoration-none">
                  Returns, Damages, & Claims
                </a>
              </li>
              <li>
                <a href="/service-level-agreement" className="text-white text-decoration-none">
                  Service Level Agreement
                </a>
              </li>  <li>
                <a href="/terms-and-condition-of-sale" className="text-white text-decoration-none">
                  Terms and Conditions of Sale
                </a>
              </li>
            </ul>
          </div>

         

        {/* Bottom Row */}
        <div className="row">
          <div className="col text-center">
            <hr className="border-light" />
            <p className="mb-0">© {new Date().getFullYear()} Agel.com. All rights reserved</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
