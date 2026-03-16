import { motion } from 'motion/react';

export function Footer() {
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
            © 2026 Stefano Marinkovich. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Diseñado y desarrollado con pasión
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
