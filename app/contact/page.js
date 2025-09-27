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
     

      

      {/* Contact Form Section */}
      <section>
        <div className="container">
          <div className="supportForm rounded" style={{ background: "#fff", boxShadow: "0 2px 12px #0844bc22", padding: "2rem", maxWidth: 600, margin: "2rem auto" }}>
            <div className="formTitle">
              <h3>Contact Agel Customer Service</h3>
            </div>
            <div className="py-2">
              <h4 className="textColor">Email Address:</h4>
              <p className="fw-bold">agel@gmail.com</p>
              <h4 className="textColor">Office Number:</h4>
              <p className="fw-bold">09883737373</p>
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
