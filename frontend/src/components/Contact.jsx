import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = 'service_x9b0dfa';
const templateID = 'template_vja8c97';
const publicKey = 'naHTp9P88rBf2wQtH';

await emailjs.send(
  'service_x9b0dfa',    // service ID
  'template_vja8c97',   // template ID
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  'naHTp9P88rBf2wQtH'     // public key
);


toast({
  title: "Message Sent!",
  description: "Thank you for your message. I'll get back to you soon!",
});

setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sumitsah250@gmail.com',
      link: 'mailto:sumitsah250@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Nepal',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      username: '@sumitsah250',
      url: 'https://github.com/sumitsah250',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      username: '@sumit-sah-3675b91a9',
      url: 'https://linkedin.com/in/sumit-sah-3675b91a9',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      username: '@sumitsah.250',
      url: 'https://instagram.com/sumitsah.250',
      color: 'hover:text-pink-400'
    },
    {
      icon: <Facebook size={24} />,
      label: 'Facebook',
      username: '@sumitsah250',
      url: 'https://facebook.com/sumitsah250',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
              <span className="text-[#00FFD1]">&lt;</span>CONTACT<span className="text-[#00FFD1]">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-[#00FFD1] mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's collaborate and build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 font-mono">
                  Get In Touch
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and mobile development. 
                  Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-[#00FFD1] bg-opacity-10 p-3 rounded-lg border border-[#00FFD1] border-opacity-30">
                      <div className="text-[#00FFD1]">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-mono">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-white hover:text-[#00FFD1] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-bold text-white mb-6 font-mono">
                  Connect With Me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-gray-800 
                        text-gray-400 ${social.color} transition-all duration-300 
                        hover:border-[#00FFD1] hover:bg-opacity-70 group flex items-center gap-3`}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{social.label}</div>
                        <div className="text-xs text-gray-500 font-mono">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 border border-gray-800">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="text-[#00FFD1]" size={24} />
                <h3 className="text-2xl font-bold text-white font-mono">
                  Send Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white 
                      focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white 
                      focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white 
                      focus:border-[#00FFD1] focus:ring-1 focus:ring-[#00FFD1] transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="creative-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1] via-[#6FD2C0] to-[#00FFD1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;