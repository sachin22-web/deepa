import { useState } from "react";
import { Send, Briefcase, MessageCircle, CheckCircle } from "lucide-react";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappNumber = "919350032922"; // +91 9350032922
  const ownerName = "Deepa";
  const ownerEmail = "saindeepa57@gmail.com";
  const ownerExperience = "30 years";

  const positions = [
    "Jewellery Designer",
    "Master Craftsman",
    "Sales Executive",
    "Apprentice",
    "Quality Inspector",
    "Store Manager",
    "Marketing Executive",
    "Other",
  ];

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

    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      alert("Please fill all required fields");
      setLoading(false);
      return;
    }

    // Create WhatsApp message
    const message = `Hello ${ownerName},\n\nI am interested in the position of ${formData.position}.\n\n*Candidate Details:*\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nExperience: ${formData.experience} years\n\n*Message:*\n${formData.message || "Interested in joining your team."}\n\nLooking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
      });

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      setTimeout(() => setSubmitted(false), 3000);
      setLoading(false);
    }, 800);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-secondary to-secondary/95 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
            alt="Join Our Team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container-max relative z-10 section-padding text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Join GD Jewellers
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Be Part of Our Legacy of Excellence and Craftsmanship
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
                Why Join Us?
              </h2>
              <p className="text-gray-600 mb-4">
                Founded and led by a visionary with{" "}
                <span className="font-bold">{ownerExperience}</span> of experience in the jewellery
                industry, GD Jewellers is a beacon of quality, authenticity, and craftsmanship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    Work with master craftsmen and learn traditional jewellery making techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    Access to premium materials and certified gemstones
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    Growth opportunities in a growing luxury jewellery brand
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-gray-700">
                    Be part of a legacy trusted by thousands of customers
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gold-50 rounded-lg p-8 border border-gold-200">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-serif font-bold text-secondary">
                  Open Positions
                </h3>
              </div>
              <div className="space-y-3">
                {positions.map((pos, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary">→</span>
                    <span>{pos}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                Don't see your role? No problem! Fill out the inquiry form below and tell us what
                you're passionate about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding bg-gold-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">
                Submit Your Inquiry
              </h2>
              <p className="text-gray-600">
                Fill the form below and we'll connect with you directly on WhatsApp
              </p>
            </div>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-300 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800">Inquiry Submitted Successfully!</p>
                  <p className="text-green-700 text-sm mt-1">
                    Opening WhatsApp for direct communication. If it doesn't open automatically,
                    please click the link manually.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  required
                  className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Position Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary bg-white"
                >
                  <option value="">-- Select Position --</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>
                      {pos}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 5"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interests and why you'd like to join our team..."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {loading ? "Submitting..." : "Submit & Open WhatsApp"}
              </button>
            </form>

            <div className="mt-8 p-4 bg-gold-50 rounded-lg border border-gold-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">📱 Direct Contact:</span> After submission, you'll be
                taken directly to WhatsApp to chat with Deepa. You can also email us at{" "}
                <span className="font-semibold text-primary">{ownerEmail}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Deepa Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">
              Meet Our Founder
            </h2>
            <div className="bg-gold-50 rounded-lg p-8 border border-gold-200">
              <div className="text-5xl mb-4">👩‍💼</div>
              <h3 className="text-2xl font-serif font-bold text-secondary mb-2">GD Jewellers Founder</h3>
              <p className="text-primary font-semibold mb-4">Master Jeweller & Visionary</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over {ownerExperience} of experience in the jewellery industry, our founder has
                dedicated their life to creating exquisite pieces that blend tradition with modern
                elegance. Their passion for authentic craftsmanship and customer satisfaction has made
                GD Jewellers a trusted name in the luxury jewellery market.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're looking to join our team or purchase your dream piece, our founder brings
                personal attention and expertise to every interaction. Connect on WhatsApp
                at <span className="font-bold">+91 9350032922</span> or email{" "}
                <span className="font-bold">{ownerEmail}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gold-50 border-t border-gold-100">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                What qualifications do I need?
              </h3>
              <p className="text-gray-600">
                While formal qualifications are valuable, we believe in potential and passion. If
                you're dedicated to learning the art of jewellery making, we'd love to hear from
                you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                Do you hire apprentices?
              </h3>
              <p className="text-gray-600">
                Yes! We offer apprenticeship programs for candidates eager to learn traditional
                jewellery craftsmanship. This is a great way to start your career with us.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                What's the response time?
              </h3>
              <p className="text-gray-600">
                Once you submit your inquiry, our team will contact you directly on WhatsApp within
                24-48 hours to discuss opportunities and answer your questions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-secondary mb-3">
                Can I inquire about internships?
              </h3>
              <p className="text-gray-600">
                Absolutely! We welcome interns interested in gaining practical experience in
                jewellery design, sales, and craftsmanship. Select "Other" if your role isn't
                listed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
