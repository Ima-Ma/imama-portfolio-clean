import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_1spa7c5', 
      'template_ygr3s9f', 
      form.current, 
      '_mMDOpQ5z0H3ognkc'
    )
      .then(() => {
          toast.success('Message sent! I will get back to you soon.', {
            style: { borderRadius: '10px', background: '#333', color: '#fff' },
          });
          e.target.reset(); 
      })
      .catch((error) => {
          console.error(error);
          toast.error('Failed to send message. Try WhatsApp!');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Info */}
        <div className="text-white space-y-6 p-4">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Let's <span className="text-cyan-500">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out through any of these platforms.
          </p>

          <div className="space-y-4">
            <a href="https://wa.me/923112033680" target="_blank" rel="noreferrer" 
               className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group">
              <div className="bg-green-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <span className="text-green-400 font-bold">WA</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">WhatsApp</p>
                <p className="font-semibold">+92 311 2033680</p>
              </div>
            </a>

            <a href="mailto:imamamushtaq2006@gmail.com" 
               className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group">
              <div className="bg-blue-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <span className="text-blue-400 font-bold">@</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">Email</p>
                <p className="font-semibold text-sm sm:text-base">imamamushtaq2006@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Glassmorphic Form */}
        <div className="relative group">
          {/* Animated background glow */}
          <div className="absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input 
                type="text" name="user_name" required
                placeholder="Enter your name.."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input 
                type="email" name="user_email" required
                placeholder="Enter your email..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                name="message" rows="4" required
                placeholder="How can I help you today?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-black transition-all duration-300 ${
                loading ? 'bg-gray-500 cursor-not-allowed' :  'bg-cyan-500 hover:bg-cyan-400 text-black font-black'
              }`}
            >
              {loading ? 'Processing...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;