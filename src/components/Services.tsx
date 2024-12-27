import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Palette, Megaphone } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const services = [
  {
    title: 'Website Design',
    icon: Layout,
    description: 'Website design is the process of planning and creating the visual layout, structure, and functionality of a website...',
  },
  {
    title: 'UX/UI Design',
    icon: Palette,
    description: 'UI and UX design focus on enhancing the interaction between users and a product or website...',
  },
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    description: 'Digital marketing is the use of online platforms and digital technologies to promote products or services...',
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="services" className="py-20 bg-[#5F1010] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4" ref={containerRef}>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            SERVICES
          </h1>
        </FadeIn>

        <motion.div style={{ scale }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-white to-orange-400 rounded-xl p-6 hover:from-orange-400 hover:to-orange-400 hover:text-white transition-all duration-500 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon size={48} className="mb-4 group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="group-hover:text-white transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </motion.div>
      </div>
    </section>
  );
}