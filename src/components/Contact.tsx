import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-[#20061E] text-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          CONTACT ME
        </motion.h1>

        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
            />
          </div>

          <div>
            <textarea
              placeholder="Enter Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-white text-[#20061E] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300"
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}