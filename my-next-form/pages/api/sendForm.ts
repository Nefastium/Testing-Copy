import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validaciones básicas
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  // Aquí podés agregar tu lógica de envío real:
  // - Guardar en Google Sheets
  // - Enviar correo con nodemailer
  // - Guardar en DB
  // Por ahora solo simulamos que todo salió bien
  console.log('Form received:', { name, email, subject, message });

  return res.status(200).json({ message: 'Form received successfully' });
}