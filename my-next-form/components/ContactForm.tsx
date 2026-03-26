'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Por favor ingresa tu nombre.';
    if (!email.trim()) newErrors.email = 'Por favor ingresa tu email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email inválido.';
    if (!subject.trim()) newErrors.subject = 'Por favor ingresa el asunto.';
    if (!message.trim()) newErrors.message = 'Por favor ingresa tu mensaje.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/sendForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700 max-w-3xl mx-auto"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-700 focus:border-purple-500'
              }`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-700 focus:border-purple-500'
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">
            {t('contact.subject')}
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-colors ${
              errors.subject ? 'border-red-500' : 'border-gray-700 focus:border-purple-500'
            }`}
          />
          {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
            {t('contact.message')}
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-700 focus:border-purple-500'
            }`}
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        <motion.button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail className="w-5 h-5" />
          {status === 'sending' ? 'Enviando...' : t('contact.sendButton')}
        </motion.button>

        {status === 'success' && <p className="text-green-400 mt-3">¡Mensaje enviado con éxito! ✅</p>}
        {status === 'error' && <p className="text-red-400 mt-3">Error al enviar ❌</p>}
      </form>
    </motion.div>
  );
}