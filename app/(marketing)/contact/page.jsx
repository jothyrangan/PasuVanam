import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/shared/SEOHead";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CONTACT_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact Us" />
      <div className="pt-24 pb-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about our products or your subscription? We&apos;d
              love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-orange-50/50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-primary shadow-sm mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Farm Address</p>
                      <p className="text-gray-600 mt-1">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-primary shadow-sm mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600 mt-1">{CONTACT_INFO.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full text-primary shadow-sm mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600 mt-1">{CONTACT_INFO.email}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Solar+Erode+Bus+Stand&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-5" aria-label="Contact Form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button className="w-full text-base h-12" type="button">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
