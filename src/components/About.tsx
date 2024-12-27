import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-emerald-500">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          ABOUT ME
        </motion.h1>

        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2"
              alt="Profile"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6">RAJESH CHOWHAN</h2>
            <p className="text-lg leading-relaxed">
              "Hi, I'm Rajesh, a passionate Frontend Developer with expertise in HTML, CSS, and JavaScript. 
              I focus on creating clean, responsive, and user-friendly web interfaces that deliver seamless 
              experiences across devices. With a keen eye for design and a solid understanding of web 
              development principles, I strive to bring creative and functional solutions to every project 
              I work on."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}