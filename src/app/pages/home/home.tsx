import { FC, useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Form from '../../components/form/form';
import About from '../../components/about/about';

type HomeProps = {
  title?: string;
  subtitle?: string;
};

const HomePage: FC<HomeProps> = ({ title, subtitle }) => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
  const [name, setName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const isValidMessage = message.trim().length >= 10;
  const showErrorMessage = messageTouched && !isValidMessage;
  const showErrorEmail = emailTouched && !validateEmail(email);
  const hasError = showErrorMessage || showErrorEmail;

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setSuccess('');
    setError('');

    if (hasError) return;

    try {
      setLoading(true);

      const response = await fetch(
        'https://cypv2sgp8z.us-east-2.awsapprunner.com/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess('Message sent successfully!');
      setName('');
      setEmail('');
      setEmailTouched(false);
      setMessage('');
      setMessageTouched(false);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          pt: 8,
        }}
      >
        <About />
        <Form />
      </Box>
    </>
  );
};

export default HomePage;