import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Desarrollo Web',
    image: 'https://images.unsplash.com/photo-1753998943228-73470750c597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGRhcmslMjBjb2Rpbmd8ZW58MXx8fHwxNzczNjI4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Plataforma de comercio electrónico con panel de administración',
  },
  {
    title: 'Dashboard Analytics',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2UlMjBkYXJrfGVufDF8fHx8MTc3MzYyODcyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Dashboard interactivo con visualización de datos en tiempo real',
  },
  {
    title: 'Mobile App Design',
    category: 'App Design',
    image: 'https://images.unsplash.com/photo-1762279389045-110301edeecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3MzU5MTYwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Aplicación móvil con diseño moderno y animaciones fluidas',
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          ))}
        </div>
      </div>
    </section>
  );
}
