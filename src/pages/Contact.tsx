import React from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const Contact = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;

    // Here you would typically handle form submission, e.g., send data to a server
    console.log("Form submitted");
    form.reset();
    
    toast.success(`Thank you, ${name}! Your message has been sent.`);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 bg-gray-800 text-white">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a2a50033-9db6-4e5f-9026-65b50e2bc2b8/contact-banner-xnueydg-1765113897268.webp"
          alt="Person filling a contact form" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">We are here to answer any questions you may have. Reach out to us and we will respond as soon as we can.</p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold">
                    Send Message <Send size={20} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-800">Our Location</h2>
              <p>Walgawo Senior Secondary School</p>
              <p>123 Education Avenue,<br/>Walgawo City, 10101,<br/>East Africa</p>
              <h3 className="text-xl font-bold text-gray-800 mt-8">Email</h3>
              <p>General Inquiries: <a href="mailto:info@walgawo.edu">info@walgawo.edu</a></p>
              <p>Admissions Office: <a href="mailto:admissions@walgawo.edu">admissions@walgawo.edu</a></p>
              <h3 className="text-xl font-bold text-gray-800 mt-8">Phone</h3>
              <p>Main Office: +254 123 456 789</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
