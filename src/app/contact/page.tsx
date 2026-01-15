import FadeIn from "@/components/FadeIn"
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
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/7.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
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
          <FadeIn>
            <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-secondary">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              Reach out to us through any of the following channels. Our team is
              available to assist you with your construction and engineering
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="card card-body flex h-full flex-col text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone size={32} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-secondary">
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

            <div className="card card-body flex h-full flex-col text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail size={32} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-secondary">
                Email Address
              </h3>
              <Link
                href="mailto:info@ease-int.com"
                className="text-muted transition-colors duration-200 hover:text-primary"
              >
                info@ease-int.com
              </Link>
            </div>

            <div className="card card-body flex h-full flex-col text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-secondary">
                Office Location
              </h3>
              <p className="text-muted">Bole Sub-City, Woreda 06</p>
              <p className="text-muted">Jacros-Salitemehret RD</p>
              <p className="text-muted">Addis Ababa, Ethiopia</p>
            </div>

            <div className="card card-body flex h-full flex-col text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock size={32} className="text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-secondary">
                Business Hours
              </h3>
              <p className="text-muted">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-muted">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-muted">Sunday: Closed</p>
            </div>
          </div>
          </FadeIn>
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
