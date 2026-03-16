import { motion } from 'motion/react';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web y aplicaciones personalizadas con las últimas tecnologías y frameworks modernos.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Diseños adaptativos que funcionan perfectamente en todos los dispositivos.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Optimización',
    description: 'Performance y SEO optimizado para maximizar el rendimiento de tu sitio.',
    color: 'from-orange-500 to-yellow-500',
  },
];

export function Services() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Servicios
          </h2>
          <p className="text-gray-400 text-lg">
            Soluciones completas para tu presencia digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" 
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${service.color} rounded-full`} />
                  <div className={`absolute top-8 right-8 w-1 h-1 bg-gradient-to-br ${service.color} rounded-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
