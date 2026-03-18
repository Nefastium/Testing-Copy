import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Carpintería Nasca',
    category: 'Landing Page',
    image: 'https://bbwyaqxtumwceuecxqzy.supabase.co/storage/v1/object/sign/StefWeb/nasca.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ZjgwYWMwZS03Mzg2LTQ1MTYtOTBjYS00M2FjNjRjZjhlM2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTdGVmV2ViL25hc2NhLnBuZyIsImlhdCI6MTc3Mzc4Mzg4OCwiZXhwIjoyMDg5MTQzODg4fQ.gqbhuSPHk4ZpTF_JjfOqq1uS_wyMNwa6diyISiefzYE',
    url: 'https://carpinterianasca.com.ar',
    description: 'Landing para carpintería con enfoque en conversión',
  },
  {
    title: 'GM Montajes Electromecanicos',
    category: 'Landing Page',
    image: 'https://bbwyaqxtumwceuecxqzy.supabase.co/storage/v1/object/sign/StefWeb/gm.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ZjgwYWMwZS03Mzg2LTQ1MTYtOTBjYS00M2FjNjRjZjhlM2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTdGVmV2ViL2dtLnBuZyIsImlhdCI6MTc3Mzc4Mzk0NiwiZXhwIjoyMDg5MTQzOTQ2fQ.cdHV3ePofRZEfDCVZv1ar0aMEFiuyiX9qN98eAncDzY',
    url: 'https://gmelectric.com.ar',
    description: 'Sitio para servicios de electricidad con SEO local',
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
            Algunos de mis trabajos recientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group/text-project relative overflow-hidden rounded-2xl lg:cursor-none"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/text-project:scale-105 group-hover/text-project:brightness-75"
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6"
                whileHover={{ opacity: 1 }}
              >
                <span className="text-blue-400 text-sm font-semibold mb-0">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-white">
                  <a href={project.url} className="group/project" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className=" text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover/project:text-purple-400 lg:cursor-none"
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 1.15 }}
                  >
                    <ExternalLink className="group-has-[a] w-4 h-4 group-hover/project:rotate-12 transition-transform duration-300" />
                    <span className="text-sm">Ver proyecto</span>
                  </motion.button>
                  </a>
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
