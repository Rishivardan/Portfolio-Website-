import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name"){
         setName(value);
    }
    if (name === "message"){
        setMessage(value);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    alert(`Message sent by ${name}: ${message}`);
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>


      <div className="contact-info">
        <p><strong>Email: </strong> rishivardan2004@gmail.com </p>
        <p><strong>Phone: </strong> +94 77 878 2774 </p>
        <p><strong>Location: </strong>Colombo, Sri Lanka</p>
      </div>

       <div className="social-links">
        <a href="#" target="_blank">LinkedIn</a>
        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">Twitter</a>
      </div>
    

    
    <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
