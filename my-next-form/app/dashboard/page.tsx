// my-next-form/app/dashboard/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Toast from '../../components/Toast';

export default function Dashboard() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD) {
      setAuthenticated(true);
      setToast({ message: '¡Bienvenido!', type: 'success' });
    } else {
      setToast({ message: 'Contraseña incorrecta', type: 'error' });
    }
  };

  useEffect(() => {
    if (authenticated) {
      setLoading(true);
      fetch('/api/getFormData')
        .then(res => res.json())
        .then(d => setData(d))
        .catch(err => {
          console.error(err);
          setToast({ message: 'Error al cargar los datos', type: 'error' });
        })
        .finally(() => setLoading(false));
    }
  }, [authenticated]);

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50">
        <h1 className="text-3xl font-bold mb-2">Dashboard Privado</h1>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Ingresar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Datos del Formulario</h1>
      {loading ? (
        <p className="text-gray-600">Cargando...</p>
      ) : (
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 border-b">Fecha</th>
                <th className="text-left p-3 border-b">Nombre</th>
                <th className="text-left p-3 border-b">Email</th>
                <th className="text-left p-3 border-b">Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition">
                  <td className="p-3 border-b">{row.date}</td>
                  <td className="p-3 border-b">{row.name}</td>
                  <td className="p-3 border-b">{row.email}</td>
                  <td className="p-3 border-b">{row.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}