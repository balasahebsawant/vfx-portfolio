import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rsksbql",
        "template_43lcl1z",
        formRef.current,
        "aP7FAgq2sbeJs8AOb"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-black px-6 py-32 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-lg text-gray-400 max-w-xl mb-12">
            Available for feature films, streaming projects, and senior animation roles.
            Reach out directly or use the form.
          </p>

          <div className="space-y-6 text-lg">
            <div>
              <p className="text-sm text-gray-500 uppercase">Email</p>
              <a href="mailto:balaso1972@gmail.com" className="text-yellow-400">
                balaso1972@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase">Phone</p>
              <a href="tel:+919821529889" className="text-yellow-400">
                +91 98215 29889
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/balasaheb-sawant-79360b198/"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="border border-yellow-400/30 rounded-2xl p-10"
        >
          <div className="space-y-6">

            <div>
              <label className="text-sm">Name</label>
              <input
                name="from_name"
                required
                className="w-full bg-black border border-white/20 rounded-md px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full bg-black border border-yellow-400 rounded-md px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-black border border-white/20 rounded-md px-4 py-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-md"
            >
              Send Message
            </button>

          </div>
        </motion.form>
      </div>
    </section>
  );
}
