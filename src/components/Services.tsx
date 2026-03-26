import { motion } from 'motion/react';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();
  const [rotations, setRotations] = useState<number[]>([0, 0, 0, 0]);

  const services = [
    {
      icon: Code,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: t('services.uiuxDesign.title'),
      description: t('services.uiuxDesign.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: t('services.responsiveDesign.title'),
      description: t('services.responsiveDesign.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: t('services.optimization.title'),
      description: t('services.optimization.description'),
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setRotations((prev) => {
                  const newRot = [...prev];
                  newRot[index] += 360;
                  return newRot;
                });
              }}
              className="relative group"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />

              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">

                {/* Icon */}
                <motion.div
                  animate={{ rotate: rotations[index] }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
