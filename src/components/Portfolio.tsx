import { motion } from 'motion/react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { AnimatePresence} from "framer-motion";
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Carpintería Nasca',
    category: 'Landing Page',
    image: 'https://bbwyaqxtumwceuecxqzy.supabase.co/storage/v1/object/sign/StefWeb/nasca%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ZjgwYWMwZS03Mzg2LTQ1MTYtOTBjYS00M2FjNjRjZjhlM2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTdGVmV2ViL25hc2NhICgxKS5wbmciLCJpYXQiOjE3NzM5NDU1MjYsImV4cCI6MjA4OTMwNTUyNn0.aunBCpAxWoNA7_h5ZnZCr7TVkU0W0Pk7xjDCWJPPINQ',
    url: 'https://carpinterianasca.com.ar',
    description: 'Landing para carpintería con enfoque en conversión',
  },
  {
    title: 'GM Montajes Electromecanicos',
    category: 'Landing Page',
    image: 'https://bbwyaqxtumwceuecxqzy.supabase.co/storage/v1/object/sign/StefWeb/gm%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ZjgwYWMwZS03Mzg2LTQ1MTYtOTBjYS00M2FjNjRjZjhlM2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTdGVmV2ViL2dtICgxKS5wbmciLCJpYXQiOjE3NzM5NDU1NDMsImV4cCI6MjA4OTMwNTU0M30.z9xDKXsfOKcSXTEjM-Qjhyef9UZh7dUS4TpHG2GPUUY',
    url: 'https://gmelectric.com.ar',
    description: 'Sitio para servicios de electricidad con SEO local',
  },
];

export function Portfolio() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {t('portfolio.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group/text-project relative overflow-hidden rounded-2xl lg:cursor-none ${openIndex === index ? 'rounded-b-none border-purple-400' : 'shadow-md'}`}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/text-project:scale-105 group-hover/text-project:brightness-150"
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-800 via-black/20 to-transparent transition-opacity duration-300 flex flex-row items-end p-2 gap-2"
                whileHover={{ opacity: 1 }}
              >
                <motion.div className="w-10 h-10 flex items-center justify-center mb-2"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <ChevronDown
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-8 h-8 text-purple-400 hover:text-purple-500 transition-all duration-300 hover:scale-125 border rounded-full p-1" />
                </motion.div>

                <div>
                <span className="text-blue-400 text-sm font-semibold mb-0">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                </div>
              </motion.div>
            </motion.div>
            <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-800 px-6 py-4 rounded-b-2xl">
                      <p className="text-gray-400 mb-3">{project.description}</p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-purple-400 font-semibold cursor-none"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('portfolio.viewProject')}
                        </motion.button>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
