// my-next-form/components/Toast.tsx
'use client';
import { useEffect } from 'react';

type ToastProps = {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
};

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // desaparece a los 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
  };

  return (
    <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg ${colors[type]} animate-slideIn`}>
      {message}
      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}