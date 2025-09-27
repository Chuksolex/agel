"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialButtons from "@/components/socialButtons";

export default function Menu() {
  const pathname = usePathname() || "/";

  const linkClass = (href) =>
    `nav-link custom-btn ${pathname === href ? "custom-active" : ""}`;

  const dropItemClass = (href) =>
    `dropdown-item custom-dropdown ${pathname === href ? "custom-active" : ""}`;

  // mark parent active if current path startsWith parent prefix
  const parentActive = (prefix) => pathname.startsWith(prefix) ? "custom-active" : "";

  return (
    <div className="">
         {/* top bar */}
         <div className="bg-primary py-2 px-5 text-end">
            <Link href={"/subscribe"}  style={{padding: "3px 5px",textAlign: "center",borderRadius: "20px", color: "white",  background: "orange", border: "none"}}><icon  className="bi bi-telephone-fill" /> 08123455759</Link>
            
           
         </div>
          <div className="bg-light py-2 d-flex justify-content-center ">
           <SocialButtons />
          </div>

      {/* First Row */}
      <div className="container row align-items-center">


        <div className="col col-md-5" >
                    

          <Link href="/" className="navbar-brand text-decoration-none ">
            <Image src="/agellogo.png" alt="logo" width={120} height={120} />
          </Link>
        </div>
        <div className="col col-md-3" >


          <button
            className="btn btn-fluid btn-primary"
            type="button"

          >
            Product Display Selection
          </button>
        </div>
        <div className="col col-md-3" >
          <button
            className="btn btn-fluid  btn-warning "
            type="button"

          >
            Product Display Selection
          </button>

        </div>

      </div>
            {/* Second Row */}

      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container-fluid">
          {/* <Link href="/" className="navbar-brand text-decoration-none">
            <Image src="/agellogo.png" alt="logo" width={120} height={120} />
          </Link> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Agel</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link href="/" className={linkClass("/")}>Home</Link>
                </li>

                <li className="nav-item">
                  <Link href="/products" className={linkClass("/products")}>Products</Link>
                </li>

                <li className="nav-item">
                  <Link href="/manufacturers" className={linkClass("/manufacturers")}>Manufacturers</Link>
                </li>

                {/* Dropdown: Services */}
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className={`nav-link dropdown-toggle custom-btn ${parentActive("/services")}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Premium Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/services/agel-connect" className={dropItemClass("/services/agel-connect")}>Agel Connect</Link>
                    </li>
                    <li>
                      <Link href="/services/power-pay-financing" className={dropItemClass("/services/power-pay-financing")}>Solar Financing</Link>
                    </li>
                    <li>
                      <Link href="/services/distribution-center" className={dropItemClass("/services/distribution-center")}>Distribution Center</Link>
                    </li>
                  </ul>
                </li>
                 {/* Dropdown: Solar Calculator */}
                <li className="nav-item dropdown">
                  <span
                    href="#"
                    className={`nav-link dropdown-toggle custom-btn ${parentActive("/solar-panel-calculator") || parentActive("/inverter-calculator")}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SOLAR & INVERTER ESTIMATOR
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/solar-panel-calculator" className={dropItemClass("/solar-panel-calculator")}>Solar Panel Calculator</Link>
                    </li>
                    <li>
                      <Link href="/about/team" className={dropItemClass("/inverter-calculator")}>Inverter Calculator</Link>
                    </li>
                  
                  </ul>
                </li>

                {/* Dropdown: Company */}
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className={`nav-link dropdown-toggle custom-btn ${parentActive("/about")}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    COMPANY
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/about" className={dropItemClass("/about/")}>About Agel</Link>
                    </li>
                    <li>
                      <Link href="/about" className={dropItemClass("/contact")}>Contact Us</Link>
                    </li>
                  
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link href="/contact-us" className={linkClass("/contact-us")}>Contact</Link>
                </li> */}
                                                            <div style={{ height: "10px" }} className="bg-warning"></div>

              </ul>

            </div>
          </div>

        </div>

      </nav>

    </div>
  );
}
