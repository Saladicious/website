import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Main Indian floral pattern background */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\",%3E%3Cpath fill=\"none\" stroke=\"%23FF9800\" stroke-width=\"2\" d=\"M50 10C55.52 10 60 14.48 60 20C60 25.52 55.52 30 50 30C44.48 30 40 25.52 40 20C40 14.48 44.48 10 50 10Z\"/%3E%3Cpath fill=\"none\" stroke=\"%234CAF50\" stroke-width=\"2\" d=\"M50 10C55.52 10 60 5.52 60 0M50 10C44.48 10 40 5.52 40 0M50 30C55.52 30 60 34.48 60 40M50 30C44.48 30 40 34.48 40 40M20 50C20 44.48 14.48 40 10 40M20 50C20 55.52 14.48 60 10 60M40 50C40 44.48 34.48 40 30 40M40 50C40 55.52 34.48 60 30 60M60 50C60 44.48 65.52 40 70 40M60 50C60 55.52 65.52 60 70 60M80 50C80 44.48 85.52 40 90 40M80 50C80 55.52 85.52 60 90 60M50 70C44.48 70 40 74.48 40 80M50 70C55.52 70 60 74.48 60 80M50 90C44.48 90 40 94.48 40 100M50 90C55.52 90 60 94.48 60 100\"/%3E%3Cpath fill=\"none\" stroke=\"%239C27B0\" stroke-width=\"2\" d=\"M30 20C25.58 20 22 16.42 22 12C22 7.58 25.58 4 30 4C34.42 4 38 7.58 38 12C38 16.42 34.42 20 30 20Z\"/%3E%3Cpath fill=\"none\" stroke=\"%23FFC107\" stroke-width=\"2\" d=\"M70 20C74.42 20 78 16.42 78 12C78 7.58 74.42 4 70 4C65.58 4 62 7.58 62 12C62 16.42 65.58 20 70 20Z\"/%3E%3Cpath fill=\"none\" stroke=\"%23FF9800\" stroke-width=\"2\" d=\"M30 80C25.58 80 22 83.58 22 88C22 92.42 25.58 96 30 96C34.42 96 38 92.42 38 88C38 83.58 34.42 80 30 80Z\"/%3E%3Cpath fill=\"none\" stroke=\"%234CAF50\" stroke-width=\"2\" d=\"M70 80C74.42 80 78 83.58 78 88C78 92.42 74.42 96 70 96C65.58 96 62 92.42 62 88C62 83.58 65.58 80 70 80Z\"/%3E%3C/svg%3E')",
          backgroundSize: "160px 160px"
        }}>
      </div>
      
      {/* Top border with Indian pattern */}
      <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
        <div className="absolute inset-0 bg-saladicious-orange" style={{
          maskImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"8\" viewBox=\"0 0 100 8\" xmlns=\"http://www.w3.org/2000/svg\",%3E%3Cpath d=\"M0 0C10 0 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 0 80 0C90 0 90 8 100 8V0H0Z\" fill=\"black\"/%3E%3C/svg%3E')",
          maskSize: "40px 8px",
          maskRepeat: "repeat-x"
        }}></div>
      </div>
      
      {/* Bottom border with Indian pattern */}
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
        <div className="absolute inset-0 bg-saladicious-green" style={{
          maskImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"8\" viewBox=\"0 0 100 8\" xmlns=\"http://www.w3.org/2000/svg\",%3E%3Cpath d=\"M0 8C10 8 10 0 20 0C30 0 30 8 40 8C50 8 50 0 60 0C70 0 70 8 80 8C90 8 90 0 100 0V8H0Z\" fill=\"black\"/%3E%3C/svg%3E')",
          maskSize: "40px 8px",
          maskRepeat: "repeat-x"
        }}></div>
      </div>
      
      {/* Left decorative element */}
      <div className="hidden lg:block absolute left-8 top-1/3 transform -translate-y-1/2">
        <div className="relative w-32 h-64">
          <div className="absolute top-0 left-0 w-full h-full opacity-60" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"160\" height=\"320\" viewBox=\"0 0 160 320\" xmlns=\"http://www.w3.org/2000/svg\",%3E%3Cpath d=\"M80 10C91.05 10 100 18.95 100 30C100 41.05 91.05 50 80 50C68.95 50 60 41.05 60 30C60 18.95 68.95 10 80 10ZM80 65C91.05 65 100 73.95 100 85C100 96.05 91.05 105 80 105C68.95 105 60 96.05 60 85C60 73.95 68.95 65 80 65ZM80 120C91.05 120 100 128.95 100 140C100 151.05 91.05 160 80 160C68.95 160 60 151.05 60 140C60 128.95 68.95 120 80 120ZM80 175C91.05 175 100 183.95 100 195C100 206.05 91.05 215 80 215C68.95 215 60 206.05 60 195C60 183.95 68.95 175 80 175ZM80 230C91.05 230 100 238.95 100 250C100 261.05 91.05 270 80 270C68.95 270 60 261.05 60 250C60 238.95 68.95 230 80 230ZM80 285C91.05 285 100 293.95 100 305C100 316.05 91.05 325 80 325C68.95 325 60 316.05 60 305C60 293.95 68.95 285 80 285Z\" stroke=\"none\" fill=\"%23FF9800\" fill-opacity=\"0.6\"/%3E%3Cpath d=\"M40 40C51.05 40 60 48.95 60 60C60 71.05 51.05 80 40 80C28.95 80 20 71.05 20 60C20 48.95 28.95 40 40 40ZM40 95C51.05 95 60 103.95 60 115C60 126.05 51.05 135 40 135C28.95 135 20 126.05 20 115C20 103.95 28.95 95 40 95ZM40 150C51.05 150 60 158.95 60 170C60 181.05 51.05 190 40 190C28.95 190 20 181.05 20 170C20 158.95 28.95 150 40 150ZM40 205C51.05 205 60 213.95 60 225C60 236.05 51.05 245 40 245C28.95 245 20 236.05 20 225C20 213.95 28.95 205 40 205ZM40 260C51.05 260 60 268.95 60 280C60 291.05 51.05 300 40 300C28.95 300 20 291.05 20 280C20 268.95 28.95 260 40 260Z\" stroke=\"none\" fill=\"%234CAF50\" fill-opacity=\"0.6\"/%3E%3Cpath d=\"M120 40C131.05 40 140 48.95 140 60C140 71.05 131.05 80 120 80C108.95 80 100 71.05 100 60C100 48.95 108.95 40 120 40ZM120 95C131.05 95 140 103.95 140 115C140 126.05 131.05 135 120 135C108.95 135 100 126.05 100 115C100 103.95 108.95 95 120 95ZM120 150C131.05 150 140 158.95 140 170C140 181.05 131.05 190 120 190C108.95 190 100 181.05 100 170C100 158.95 108.95 150 120 150ZM120 205C131.05 205 140 213.95 140 225C140 236.05 131.05 245 120 245C108.95 245 100 236.05 100 225C100 213.95 108.95 205 120 205ZM120 260C131.05 260 140 268.95 140 280C140 291.05 131.05 300 120 300C108.95 300 100 291.05 100 280C100 268.95 108.95 260 120 260Z\" stroke=\"none\" fill=\"%23FFC107\" fill-opacity=\"0.6\"/%3E%3C/svg%3E')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}></div>
        </div>
      </div>
      
      {/* Right decorative element */}
      <div className="hidden lg:block absolute right-8 top-2/3 transform -translate-y-1/2">
        <div className="relative w-32 h-64">
          <div className="absolute top-0 left-0 w-full h-full opacity-60" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"160\" height=\"320\" viewBox=\"0 0 160 320\" xmlns=\"http://www.w3.org/2000/svg\",%3E%3Cpath d=\"M80 10C91.05 10 100 18.95 100 30C100 41.05 91.05 50 80 50C68.95 50 60 41.05 60 30C60 18.95 68.95 10 80 10ZM80 65C91.05 65 100 73.95 100 85C100 96.05 91.05 105 80 105C68.95 105 60 96.05 60 85C60 73.95 68.95 65 80 65ZM80 120C91.05 120 100 128.95 100 140C100 151.05 91.05 160 80 160C68.95 160 60 151.05 60 140C60 128.95 68.95 120 80 120ZM80 175C91.05 175 100 183.95 100 195C100 206.05 91.05 215 80 215C68.95 215 60 206.05 60 195C60 183.95 68.95 175 80 175ZM80 230C91.05 230 100 238.95 100 250C100 261.05 91.05 270 80 270C68.95 270 60 261.05 60 250C60 238.95 68.95 230 80 230ZM80 285C91.05 285 100 293.95 100 305C100 316.05 91.05 325 80 325C68.95 325 60 316.05 60 305C60 293.95 68.95 285 80 285Z\" stroke=\"none\" fill=\"%23FF9800\" fill-opacity=\"0.6\"/%3E%3Cpath d=\"M40 40C51.05 40 60 48.95 60 60C60 71.05 51.05 80 40 80C28.95 80 20 71.05 20 60C20 48.95 28.95 40 40 40ZM40 95C51.05 95 60 103.95 60 115C60 126.05 51.05 135 40 135C28.95 135 20 126.05 20 115C20 103.95 28.95 95 40 95ZM40 150C51.05 150 60 158.95 60 170C60 181.05 51.05 190 40 190C28.95 190 20 181.05 20 170C20 158.95 28.95 150 40 150ZM40 205C51.05 205 60 213.95 60 225C60 236.05 51.05 245 40 245C28.95 245 20 236.05 20 225C20 213.95 28.95 205 40 205ZM40 260C51.05 260 60 268.95 60 280C60 291.05 51.05 300 40 300C28.95 300 20 291.05 20 280C20 268.95 28.95 260 40 260Z\" stroke=\"none\" fill=\"%234CAF50\" fill-opacity=\"0.6\"/%3E%3Cpath d=\"M120 40C131.05 40 140 48.95 140 60C140 71.05 131.05 80 120 80C108.95 80 100 71.05 100 60C100 48.95 108.95 40 120 40ZM120 95C131.05 95 140 103.95 140 115C140 126.05 131.05 135 120 135C108.95 135 100 126.05 100 115C100 103.95 108.95 95 120 95ZM120 150C131.05 150 140 158.95 140 170C140 181.05 131.05 190 120 190C108.95 190 100 181.05 100 170C100 158.95 108.95 150 120 150ZM120 205C131.05 205 140 213.95 140 225C140 236.05 131.05 245 120 245C108.95 245 100 236.05 100 225C100 213.95 108.95 205 120 205ZM120 260C131.05 260 140 268.95 140 280C140 291.05 131.05 300 120 300C108.95 300 100 291.05 100 280C100 268.95 108.95 260 120 260Z\" stroke=\"none\" fill=\"%23FFC107\" fill-opacity=\"0.6\"/%3E%3C/svg%3E')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            transform: "scaleX(-1)"
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-saladicious-dark-green mb-6">
          Get In <span className="text-saladicious-orange">Touch</span>
        </h2>
        
        <p className="text-base sm:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-16">
          Have questions about our healthy, Indian-inspired salads? Want to suggest a new flavor?
          Or just want to say hello? We'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Form Side */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-saladicious-green/20 relative overflow-hidden">
            {/* Decorative corner patterns */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C30 0 50 0 100 0C100 50 100 70 100 100C50 100 30 100 0 100C0 50 0 30 0 0Z" fill="none" stroke="#FF9800" strokeWidth="4"></path>
                <path d="M20 20C40 20 60 20 80 20C80 40 80 60 80 80C60 80 40 80 20 80C20 60 20 40 20 20Z" fill="none" stroke="#4CAF50" strokeWidth="3"></path>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20 transform rotate-180">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0C30 0 50 0 100 0C100 50 100 70 100 100C50 100 30 100 0 100C0 50 0 30 0 0Z" fill="none" stroke="#FF9800" strokeWidth="4"></path>
                <path d="M20 20C40 20 60 20 80 20C80 40 80 60 80 80C60 80 40 80 20 80C20 60 20 40 20 20Z" fill="none" stroke="#4CAF50" strokeWidth="3"></path>
              </svg>
            </div>
            
            {/* Success message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-saladicious-green/10 border border-saladicious-green rounded-md text-saladicious-dark-green">
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm">We'll get back to you soon.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-saladicious-dark-green font-medium mb-2" htmlFor="name">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-saladicious-green'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-saladicious-dark-green font-medium mb-2" htmlFor="email">Email</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-saladicious-green'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-saladicious-dark-green font-medium mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message here..." 
                  rows={4}
                  className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-saladicious-green'} focus:outline-none focus:ring-2 focus:border-transparent transition-colors`}
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-6 rounded-md transition-colors text-base sm:text-lg ${isSubmitting ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-saladicious-orange hover:bg-saladicious-orange/90 text-white'}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Info Side */}
          <div className="flex flex-col space-y-8">
            {/* Contact Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-saladicious-orange/20 flex items-start space-x-4">
              <div className="rounded-full bg-saladicious-orange/10 p-3 text-saladicious-orange">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-saladicious-dark-green mb-2">Visit Us</h3>
                <p className="text-gray-600">Indiranagar, 100 Feet Road</p>
                <p className="text-gray-600">Bengaluru, Karnataka 560038</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-saladicious-green/20 flex items-start space-x-4">
              <div className="rounded-full bg-saladicious-green/10 p-3 text-saladicious-green">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-saladicious-dark-green mb-2">Email Us</h3>
                <p className="text-gray-600">hello@saladicious.com</p>
                <p className="text-gray-600">support@saladicious.com</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-saladicious-yellow/20 flex items-start space-x-4">
              <div className="rounded-full bg-saladicious-yellow/10 p-3 text-saladicious-orange">
                <FaPhone size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-saladicious-dark-green mb-2">Call Us</h3>
                <p className="text-gray-600">+91 123 456 7890</p>
                <p className="text-gray-600">Mon-Sat: 10AM to 8PM</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-display font-semibold text-xl text-saladicious-dark-green mb-4">Connect With Us</h3>
              <div className="flex space-x-5">
                <a href="#" className="rounded-full bg-saladicious-green/10 p-3.5 text-saladicious-green hover:bg-saladicious-green hover:text-white transition-colors">
                  <FaFacebookF size={22} />
                </a>
                <a href="#" className="rounded-full bg-saladicious-orange/10 p-3.5 text-saladicious-orange hover:bg-saladicious-orange hover:text-white transition-colors">
                  <FaTwitter size={22} />
                </a>
                <a href="#" className="rounded-full bg-saladicious-red/10 p-3.5 text-saladicious-red hover:bg-saladicious-red hover:text-white transition-colors">
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;