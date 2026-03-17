import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Carpintería Nasca',
    category: 'Landing Page',
    image: 'public/nasca.png',
    url: 'https://carpinterianasca.com.ar',
    description: 'Landing para carpintería con enfoque en conversión',
  },
  {
    title: 'GM Electric',
    category: 'Web Profesional',
    image: '/projects/gm.gif',
    url: 'https://gmelectric.com.ar',
    description: 'Sitio para servicios eléctricos con SEO local',
  },
];

export function Portfolio() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Proyectos
          </h2>
          <p className="text-gray-400 text-lg">
            Algunos de mis trabajos recientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a href={project.url} target="_blank">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-blue-400 text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-white">
                  <span className="text-sm mr-2">Ver proyecto</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-300" />
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
