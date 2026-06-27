import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company name is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cols = sectionRef.current?.querySelectorAll(".contact-col");
    if (!cols) return;

    gsap.fromTo(
      cols,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  const onSubmit = (_data: FormData) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSubmitted(true);
        resolve();
      }, 800);
    });
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
  const errorClass = "mt-1.5 text-xs text-red-500";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-white"
      data-testid="section-contact"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="contact-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-blue-600"></div>
              <span className="text-sm font-bold tracking-widest text-slate-900 uppercase">Contact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Let's build something worth building.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Tell us about your project. We'll get back to you within one business day with an honest assessment and a clear path forward.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <a
                  href="mailto:hello@luminarystudio.io"
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  data-testid="link-email"
                >
                  hello@luminarystudio.io
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <a
                  href="tel:+14150000000"
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  data-testid="link-phone"
                >
                  +1 415 000 0000
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
                aria-label="GitHub"
                data-testid="link-social-github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-col">
            {submitted ? (
              <div
                className="h-full flex flex-col items-start justify-center py-16"
                data-testid="success-message"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message received</h3>
                <p className="text-slate-600 leading-relaxed">
                  Thank you. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
                data-testid="form-contact"
              >
                <div>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Full Name"
                    className={inputClass}
                    data-testid="input-name"
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className={inputClass}
                    data-testid="input-email"
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder="Company"
                    className={inputClass}
                    data-testid="input-company"
                  />
                  {errors.company && <p className={errorClass}>{errors.company.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <select
                      {...register("projectType")}
                      className={`${inputClass} text-slate-500`}
                      defaultValue=""
                      data-testid="select-project-type"
                    >
                      <option value="" disabled>Project Type</option>
                      <option value="web-app">Web App</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
                  </div>

                  <div>
                    <select
                      {...register("budget")}
                      className={`${inputClass} text-slate-500`}
                      defaultValue=""
                      data-testid="select-budget"
                    >
                      <option value="" disabled>Budget Range</option>
                      <option value="under-20k">Under $20k</option>
                      <option value="20k-50k">$20k – $50k</option>
                      <option value="50k-100k">$50k – $100k</option>
                      <option value="100k-plus">$100k+</option>
                    </select>
                    {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                    data-testid="textarea-message"
                  />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
