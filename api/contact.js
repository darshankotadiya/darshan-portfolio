// api/contact.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST allowed' });
    }

    const { name, email, subject, message } = req.body;

    // ૧. ટ્રાન્સપોર્ટર (તમારો Gmail App Password અહીં આવશે)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'darshankotadiya1010@gmail.com',
            pass: 'utfseqgfijjoqihb'
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: 'darshankotadiya1010@gmail.com',
            subject: `New Portfolio Message: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}