"use client";
import React, { useState } from "react";

// You can import your CSS module or use global styles
// import styles from "./Contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", comment: "" });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const res = await fetch("https://formspree.io/f/mvgojryj", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setMessage("Your request has been submitted successfully.");
        setForm({ name: "", email: "", phone: "", comment: "" });
      } else {
        setMessage("Oops! There was a problem submitting your form. Try again please.");
      }
    } catch (err) {
      setMessage("An error occurred. Check network and try again.");
    }
    setSubmitting(false);
  };

  return (
    <main style={{ background: "#f7faff", minHeight: "100vh", paddingBottom: "2rem" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-success border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/images/logomain2.png" width="50" alt="logo" height="70" />
          </a>
          <div>
            <span className="text-white">Solar Renewables Ltd.</span>
            <br />
            <span className="text-white fw-bold fst-italic m-0">We are ready for the future</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/domestic-solar-panel-installation-ng">Residential</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/commercial-solar-panel-installation-ng">Commercial</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/mini-grid">Mini-Grid</a></li>
                  <li><a className="dropdown-item" href="/balcony-solar">Balcony Solar</a></li>
                  <li><a className="dropdown-item" href="/battery-storage">Battery Storage</a></li>
                  <li><a className="dropdown-item" href="/ev-charging">EV Charging</a></li>
                  <li><a className="dropdown-item" href="/gas-and-biofuel">Gas And Biofuels</a></li>
                  <li><a className="dropdown-item" href="/agricultural-solar">Agricultural Solar</a></li>
                  <li><a className="dropdown-item" href="/waste-to-energy">Waste To Energy</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/load-calculator" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Load Calculator
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/load-calculator">Load Calculator</a></li>
                  <li><a className="dropdown-item" href="/inverter-calculator">Inverter Load Calculator</a></li>
                  <li><a className="dropdown-item" href="/solar-panel-calculator">Solar Panel Load Calculator</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/support">Support</a>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center gap-5">
              <p className="text-light fw-bold m-0">
                <i className="bi-phone"></i> 08077363636363
              </p>
              <a className="btn btn-outline-light fw-bold" href="/payment">Pay Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Title Section */}
      <section className="hero-section gradient-background">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
            <div className="col-12 col-sm-12 col-lg-6">
              <h2>Solar Solutions</h2>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-light lh-1 mb-3">SUPPORT FOR SOLAR INSTALLATION</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <div className="container">
          <div className="supportForm rounded" style={{ background: "#fff", boxShadow: "0 2px 12px #0844bc22", padding: "2rem", maxWidth: 600, margin: "2rem auto" }}>
            <div className="formTitle">
              <h3>Solar Renewables Ltd.</h3>
              <p>Support Email & Phone No.</p>
            </div>
            <div className="py-2">
              <h4 className="textColor">Email Address:</h4>
              <p className="fw-bold">soso@solarrenwable.com</p>
              <h4 className="textColor">Office Number:</h4>
              <p className="fw-bold">0988373737737373</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone</label>
                <input type="number" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="comment">Comment</label>
                <textarea className="form-control" id="comment" name="comment" value={form.comment} onChange={handleChange} rows={3} required />
              </div>
              <div className="form-group py-2">
                <button className="btn btn-warning" type="submit" disabled={submitting}>Submit</button>
              </div>
              {message && <div className="alert alert-info mt-2">{message}</div>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
