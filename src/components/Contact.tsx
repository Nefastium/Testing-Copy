import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Nefastium' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/stefano-ezequiel-marinkovich-939b57332' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:stefano.marinkovich@gmail.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/stefano.marinkovich/' },
];

export function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; subject?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Invalid email';
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (!message.trim()) newErrors.message = 'Message is required';
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
        setName(''); setEmail(''); setSubject(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(120, 119, 198, 0.1) 25%, transparent 25%),
                           linear-gradient(-45deg, rgba(120, 119, 198, 0.1) 25%, transparent 25%)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm cursor-none">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors cursor-none"
                />
                {errors.name && <p className="px-4 text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm cursor-none">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors cursor-none"
                />
                {errors.email && <p className="px-4 text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm cursor-none">
                {t('contact.subject')}
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors cursor-none"
              />
              {errors.subject && <p className="px-4 text-red-500 text-sm">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 text-sm cursor-none">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none cursor-none"
              />
              {errors.message && <p className="px-4 text-red-500 text-sm">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              {t('contact.sendButton')}
            </motion.button>

            {status === 'sending' && <p className="text-gray-400 mt-2">Enviando...</p>}
            {status === 'success' && <p className="text-green-400 mt-2">Mensaje enviado ✅</p>}
            {status === 'error' && <p className="text-red-400 mt-2">Error al enviar ❌</p>}
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}