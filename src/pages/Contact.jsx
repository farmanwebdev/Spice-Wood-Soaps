import { Helmet } from 'react-helmet-async';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here (e.g., send to an API)
    alert('Message sent! (This is a demo)');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Spice Wood Soaps</title>
        <meta
          name="description"
          content="Have questions about our ingredients or need help choosing the right soap? Get in touch with us."
        />
      </Helmet>

      <div className="bg-secondary-foreground/70 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 text-white">
            <h1 className="font-serif text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-white/60 text-lg">
              Have questions about our ingredients or need help choosing the right soap? We'd love to hear from you.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Contact Info */}
            <div className="space-y-8">
              {/* Contact Information Card */}
              <div className="bg-secondary-foreground/40 text-white p-8 rounded-2xl border border-border/50 shadow-sm space-y-6">
                <h3 className="font-serif text-2xl font-bold">Contact Information</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/20 rounded-full text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white/80 font-medium mb-1">Email Us</h4>
                      <p className="text-white/50">Spicewoodsoaps@gmail.com</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/20 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white/70 font-medium mb-1">Call Us</h4>
                      <p className="text-white/50">(904) 325-6295</p>
                      <p className="text-xs text-white/50 mt-1">
                        Monday to Friday, 10am to 7pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wholesale Inquiries Card */}
              <div className="bg-secondary-foreground/60 p-8 rounded-2xl">
                <h3 className="text-white font-serif text-xl font-bold mb-2">Wholesale Inquiries</h3>
                <p className="text-white/50">
                  Interested in selling our products in your store? Contact us and we'll be happy to work with you!
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-secondary-foreground/40 dark:bg-card p-8 md:p-10 rounded-3xl shadow-xl border border-border/50">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Name</label>
                  <input
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-8 w-full rounded-full h-12 text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}