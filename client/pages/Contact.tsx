import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Jewellery Lane, Gold District", "Mumbai, India 400001"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 22 4081 5000"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@deepajewellers.com", "support@deepajewellers.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 10:00 AM - 8:00 PM", "Sun: 12:00 PM - 6:00 PM"],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-secondary to-secondary/95 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6951695/pexels-photo-6951695.jpeg"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container-max relative z-10 section-padding text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            We'd Love to Hear from You
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-8">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-serif font-bold text-green-700 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-600">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary placeholder-gray-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary placeholder-gray-400"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary placeholder-gray-400"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Design</option>
                      <option value="repair">Repair & Polishing</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary placeholder-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Map or Image */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-secondary mb-8">
                Visit Our Store
              </h2>

              <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/6951695/pexels-photo-6951695.jpeg"
                  alt="Store Location"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-8 bg-gold-50 rounded-lg p-8">
                <h3 className="text-xl font-serif font-bold text-secondary mb-4">
                  Store Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Location</p>
                    <p className="text-gray-700">
                      123 Jewellery Lane, Gold District, Mumbai, India 400001
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Hours</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>Monday - Saturday: 10:00 AM - 8:00 PM</li>
                      <li>Sunday: 12:00 PM - 6:00 PM</li>
                      <li>Closed on Major Festivals</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Services</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>✓ Free Consultation</li>
                      <li>✓ Custom Design Studio</li>
                      <li>✓ Repair & Polishing</li>
                      <li>✓ Exchange Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-serif font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                Do you offer custom designs?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! Our expert designers can create custom jewellery pieces tailored to your
                specifications and preferences.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                Are all pieces certified?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, every piece comes with BIS hallmark and authenticity certificate. We
                guarantee 100% purity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                What about after-sales service?
              </h3>
              <p className="text-gray-600 text-sm">
                We offer lifetime free polishing, cleaning, and repair services for all
                pieces purchased from us.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                Can I exchange my jewellery?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we have an exchange policy. Please visit our store or contact us for
                detailed terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
