import React, { useState } from "react";
import PageTransition from "../../components/PageTransition";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p className="contact-info">
          Email: support@ecommerce.com<br />
          Phone: +1 234 567 890<br />
          Address: 123 Main St, City, Country
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        {submitted && <div className="contact-success">Thank you! We'll get back to you soon.</div>}
      </div>
    </PageTransition>
  );
}

export default Contact;