import toast from 'react-hot-toast';

interface EmailData {
  name: string;
  email: string;
}

const sendEmail = async (data: EmailData) => {
  try {
    const apiEndpoint =
      process.env.API_ENDPOINT ?? 'http://localhost:3000/api/send';
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success('Email successfully sent!');
    } else {
      try {
        const errorData = await response.json();
        toast.error(`I'm here: ${errorData.message}`);
      } catch (error) {
        // If response.json() fails, handle it here
        toast.error('Failed to send email. An unexpected error occurred.');
      }
    }
  } catch (error) {
    toast.error('An unexpected error occurred.');
  }
};

export default sendEmail;
