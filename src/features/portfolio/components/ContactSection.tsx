'use client';

import { useState } from "react";
import AppIcon from "@/components/ui/AppIcon";

const contactMethods = [
    {
      icon: "EnvelopeIcon",
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
    },
    {
      icon: "PhoneIcon",
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "MapPinIcon",
      label: "Location",
      value: "New York, USA",
      href: "#",
    },
] as const;

const socialLinks = [
    { name: "Instagram", icon: "CameraIcon", href: "https://instagram.com", label: "Follow on Instagram" },
    { name: "LinkedIn", icon: "BriefcaseIcon", href: "https://linkedin.com", label: "Connect on LinkedIn" },
    { name: "Behance", icon: "PaintBrushIcon", href: "https://behance.net", label: "View on Behance" },
] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <section id="contact" className="bg-white/60 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="reveal reveal-left">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#2a2a2a] sm:text-4xl lg:text-5xl mb-5">
                Let&apos;s Create Together
              </h2>
              <p className="text-base font-light leading-[1.9] text-[#3a3a3a] lg:text-lg">
                Have a project in mind? Let&apos;s discuss how we can bring your
                vision to life through creative collaboration and exceptional
                execution.
              </p>
            </div>

            <div className="reveal space-y-3 pt-3">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  className={`group flex items-center gap-4 border border-[#EAD8C2]/50 bg-white/80 backdrop-blur-sm p-5 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#EAD8C2] hover:bg-[#EAD8C2]/20 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-soft-lg`}
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-[#EAD8C2] rounded-xl shadow-soft transition-all duration-300 group-hover:bg-[#EAD8C2]/90 group-hover:scale-110 group-hover:shadow-soft-lg">
                    <AppIcon
                      // @ts-expect-error – mapping by string
                      name={method.icon}
                      size={22}
                      className="text-[#2a2a2a]"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 text-xs font-medium uppercase tracking-[0.1em] text-gray-600">
                      {method.label}
                    </div>
                    <div className="text-sm font-light text-[#2a2a2a]">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="reveal border-t border-[#EAD8C2]/40 pt-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#2a2a2a]">
                Connect With Me
              </p>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex items-center gap-4 border border-[#EAD8C2]/50 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#EAD8C2] hover:bg-[#EAD8C2]/20 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-soft-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAD8C2]/20 border border-[#EAD8C2]/40 transition-all duration-300 group-hover:bg-[#EAD8C2]/30 group-hover:scale-110">
                      <AppIcon
                        // @ts-expect-error – mapping by string
                        name={social.icon}
                        size={20}
                        className="text-[#2a2a2a]"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2a2a2a]">{social.name}</p>
                      <p className="text-xs font-light text-gray-600">{social.label}</p>
                    </div>
                    <AppIcon
                      name="ArrowRightIcon"
                      size={16}
                      className="ml-auto text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2a2a2a]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal reveal-right border border-[#EAD8C2]/50 glass-enhanced p-8 lg:p-10 shadow-soft-lg glow-soft ambient-light border-animate rounded-2xl transition-all duration-700 hover:shadow-soft-lg">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium uppercase tracking-[0.05em] text-[#2a2a2a]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full border border-[#EAD8C2]/50 bg-white/80 backdrop-blur-sm px-5 py-3.5 text-[#2a2a2a] placeholder:text-gray-400 outline-none rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-[#EAD8C2] focus:bg-white focus:scale-[1.01] focus:shadow-soft-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium uppercase tracking-[0.05em] text-[#2a2a2a]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full border border-[#EAD8C2]/50 bg-white/80 backdrop-blur-sm px-5 py-3.5 text-[#2a2a2a] placeholder:text-gray-400 outline-none rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-[#EAD8C2] focus:bg-white focus:scale-[1.01] focus:shadow-soft-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium uppercase tracking-[0.05em] text-[#2a2a2a]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full resize-none border border-[#EAD8C2]/50 bg-white/80 backdrop-blur-sm px-5 py-3.5 text-[#2a2a2a] placeholder:text-gray-400 outline-none rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-[#EAD8C2] focus:bg-white focus:scale-[1.01] focus:shadow-soft-lg"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleRipple}
                  className="w-full bg-[#EAD8C2] px-10 py-4 text-sm font-medium uppercase tracking-[0.05em] text-[#2a2a2a] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#EAD8C2]/90 hover:scale-105 hover:-translate-y-1 hover:shadow-soft-lg group shadow-soft"
                >
                  <span className="flex items-center justify-center gap-3 relative z-10">
                    Send Message
                    <AppIcon
                      name="PaperAirplaneIcon"
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </form>

              <div className="mt-8 border-t border-[#EAD8C2]/40 pt-6">
                <p className="text-center text-sm font-light text-gray-600">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


