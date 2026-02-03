const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // CORS Headers are needed for local development
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );

  // Handle Preflight Request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'darshankotadiya1010@gmail.com',
      pass: 'utfseqgfijjoqihb', // Keep this secure!
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'darshankotadiya1010@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ error: error.message });
  }
}
