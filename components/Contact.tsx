"use client";

import { motion } from "motion/react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Title from "./ui/Title";
import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Contact Me📧"
          classname="flex flex-col justify-center items-center mb-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-950 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white mb-4"
              >
                Get in Touch
              </CardItem>
              <CardItem translateZ="60" className="text-gray-400 text-sm mb-6">
                Feel free to reach out to me for any questions or opportunities!
              </CardItem>
              <div className="flex flex-col gap-4">
                <CardItem
                  translateZ="70"
                  className="flex items-center gap-3 text-white"
                >
                  <FaEnvelope className="w-5 h-5 text-purple-500" />
                  <a
                    href="mailto:amankushwaha933@gmail.com"
                    className="hover:text-purple-500 transition-colors"
                  >
                    amankushwaha933@gmail.com
                  </a>
                </CardItem>
                <CardItem
                  translateZ="80"
                  className="flex items-center gap-3 text-white"
                >
                  <SiGithub className="w-5 h-5 text-purple-500" />
                  <a
                    href="https://github.com/Amanksh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition-colors"
                  >
                    github.com/Amanksh
                  </a>
                </CardItem>
                <CardItem
                  translateZ="90"
                  className="flex items-center gap-3 text-white"
                >
                  <SiLinkedin className="w-5 h-5 text-purple-500" />
                  <a
                    href="https://www.linkedin.com/in/aman-kushwaha-939b73209/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500 transition-colors"
                  >
                    linkedin.com/in/aman-kushwaha
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-950 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <CardItem translateZ="50">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </CardItem>
                <CardItem translateZ="60">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </CardItem>
                <CardItem translateZ="70">
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-purple-500 h-32 resize-none"
                    required
                  />
                </CardItem>
                <CardItem translateZ="80">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
                  >
                    Send Message
                  </button>
                </CardItem>
              </form>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
