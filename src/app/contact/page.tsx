import { Clock, Mail, MapPin, Phone, Users } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with EASE for your construction and engineering needs. Professional consultation, project planning, and expert guidance for post-tensioning solutions in Ethiopia.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-sm bg-secondary">
        <div className="container-xl">
          <div className="text-center text-white">
            <h1 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Contact EASE
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-neutral">
              Ready to start your next construction project? Get in touch with
              our team of experts for comprehensive engineering solutions and
              professional consultation tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-secondary">
                  Send us a Message
                </h2>
                <p className="text-lg leading-relaxed text-muted">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible. Our team is ready to discuss your project
                  requirements and provide expert guidance.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input"
                    placeholder="Enter the subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Send Message
                </button>
              </form>
            </div> */}

            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-secondary">
                  Get in Touch
                </h2>
                <p className="text-lg leading-relaxed text-muted">
                  Reach out to us through any of the following channels. Our
                  team is available to assist you with your construction and
                  engineering needs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Phone Numbers
                    </h3>
                    <Link
                      href="tel:+251116671615"
                      className="block text-muted transition-colors duration-200 hover:text-primary"
                    >
                      +251 116 671 615
                    </Link>
                    <Link
                      href="tel:+251968601177"
                      className="block text-muted transition-colors duration-200 hover:text-primary"
                    >
                      +251 968 601 177
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Email Address
                    </h3>
                    <Link
                      href="mailto:info@ease-int.com"
                      className="text-muted transition-colors duration-200 hover:text-primary"
                    >
                      info@ease-int.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Office Location
                    </h3>
                    <p className="text-muted">Bole Sub-City, Woreda 06</p>
                    <p className="text-muted">Jacros-Salitemehret RD</p>
                    <p className="text-muted">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">
                      Business Hours
                    </h3>
                    <p className="text-muted">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-muted">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-sm bg-neutral">
        <div className="container-xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-secondary">
              Find Our Office
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
              Visit us at our office location in Addis Ababa. We&apos;re
              conveniently located and easily accessible for consultations and
              meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Google Maps */}
            <div className="card overflow-hidden">
              <div className="relative h-108 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.600964252302!2d38.80668560000001!3d9.008815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85afe3158581%3A0x3c1218220f02583f!2sEASE%20Engineering%20P.L.C.!5e0!3m2!1sen!2sus!4v1750884795566!5m2!1sen!2sus"
                  loading="lazy"
                  className="size-full"
                />
              </div>
            </div>

            {/* Office Image */}
            <div className="card overflow-hidden">
              <div className="relative h-108 w-full">
                <Image
                  src="/easeoffice.png"
                  alt="EASE Engineering P.L.C. Office Building in Addis Ababa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users size={32} className="text-primary" />
              </div>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-secondary">
              Join Our Team
            </h2>
            <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-muted">
              Are you passionate about construction and engineering? We&apos;re
              always looking for talented individuals to join our growing team.
              Send us your resume and tell us why you&apos;d be a great fit for
              EASE.
            </p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              Send your resume to info@ease-int.com
            </p>
          </div>

          {/* <CareersForm /> */}
        </div>
      </section>
    </>
  )
}
