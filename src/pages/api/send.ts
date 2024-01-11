import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dev.digiits@gmail.com',
        subject: 'New user onboarded',
        html: `
        <div style="font-family: sans-serif; font-size: 16px;">
          New user onboarded: ${name} (${email})
        </div>
        `,
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
