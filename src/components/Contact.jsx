import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, MessageSquare, Send } from 'lucide-react'; // Added icons for better UX

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
            style: { borderRadius: '10px', background: '#1a1a1a', color: '#fff', fontSize: '12px' },
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
    <div className="flex items-center justify-center p-4 min-h-[80vh]">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6 items-start">
        
        {/* Left Side: Professional Info */}
        <div className="text-white space-y-4 p-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight uppercase">
              Let's <span className="text-cyan-500">Connect</span>
            </h1>
            <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Have a project in mind for <span className="text-cyan-400">Core Stack Technologies</span>? 
            Reach out and let's build something scalable.
          </p>

          <div className="space-y-3 pt-4">
            <a href="https://wa.me/923112033680" target="_blank" rel="noreferrer" 
               className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all group">
              <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400 text-xs font-bold">WA</div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-mono">Quick Chat</p>
                <p className="text-sm font-medium">+92 321 3735979</p>
              </div>
            </a>

            <a href="mailto:imamamushtaq2006@gmail.com" 
               className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all group">
              <div className="bg-cyan-500/10 p-2 rounded-lg text-cyan-400">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-mono">Official Email</p>
                <p className="text-sm font-medium">imamamushtaq2006@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Compact Form */}
        <div className="relative">
          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="bg-[#0a122a]/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1.5 ml-1">Name</label>
                <input 
                  type="text" name="user_name" required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1.5 ml-1">Email</label>
                <input 
                  type="email" name="user_email" required
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-400 uppercase mb-1.5 ml-1">Message</label>
              <textarea 
                name="message" rows="3" required
                placeholder="Project details..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3 rounded-lg font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 text-black active:scale-95 disabled:bg-gray-700"
            >
              {loading ? 'Transmitting...' : (
                <>
                  <Send size={14} /> Send Inquiry
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;