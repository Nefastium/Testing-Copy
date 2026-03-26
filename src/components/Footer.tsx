import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">
            {t('footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {t('footer.tagline')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
