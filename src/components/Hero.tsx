import { motion } from 'framer-motion';
import { Download, UserPlus } from 'lucide-react';
import TextReveal from './animations/TextReveal';
import FloatingElement from './animations/FloatingElement';
import FadeIn from './animations/FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <FloatingElement>
          <div className="text-5xl md:text-7xl font-bold mb-8">
            <TextReveal text="I AM" />
            <TextReveal text="RAJESH CHOWHAN" delay={0.5} />
          </div>
        </FloatingElement>

        <FadeIn direction="up" delay={1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 border-2 border-white rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              <UserPlus className="group-hover:rotate-12 transition-transform duration-300" size={20} />
              Hire Me
            </motion.button>

            <motion.a
              href="/IIT_Dhanbad___Resume__OnCampus___2_.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 border-2 border-white rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              <Download className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
              Download CV
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}