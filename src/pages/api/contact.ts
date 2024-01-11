import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

import ContactUsTemplate from '@/components/email_templates/ContactUsTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, phoneNumber, message } = req.body;
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dev.digiits@gmail.com',
        subject: 'New Message from Contact Form',
        react: ContactUsTemplate({ name, email, phoneNumber, message }),
        text: 'New Message from Contact Form',
      });

      res.status(200).json({ message: 'Email successfully sent!' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmail;
