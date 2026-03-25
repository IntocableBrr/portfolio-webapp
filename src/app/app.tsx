// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { Button as MuiButton, ButtonProps, Avatar, TextField, Button, Alert, Box  } from '@mui/material';
import { useState } from 'react';

export function App() {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  
  const isValid = message.trim().length >= 10;
  const showErrorMessage = messageTouched && !isValid;
  const showErrorEmail = emailTouched && !validateEmail(email);
  const isError = showErrorMessage || showErrorEmail

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    setSuccess('');
    setError('');

    if (!isError) {
      try {
        const response = await fetch('https://cypv2sgp8z.us-east-2.awsapprunner.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Something went wrong');
        }

        setSuccess('Message sent successfully!');

        setEmail('');
        setEmailTouched(false);
        setName('');
        setMessageTouched(false);
        setMessage('');
      } catch (err) {
        setError('Something went wrong');
      }
    }
  };
      
  return (
    <>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <Box sx={{ justifyContent: "center", display: "flex"}}>
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ flexDirection: "column", display: "flex"}}
        >
          <Avatar 
            alt='Jacob Rosa' 
            src='jacob-avatar.jpg' 
            sx={{ width: 250, height: 250}}
          />
          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: 250, marginTop: "20px"}}
            value={name}
          />
          <TextField
            error={showErrorEmail}
            fullWidth
            helperText={showErrorEmail ? 'Enter a valid email' : ''}
            label="Email"
            name="email"
            onBlur={() => setEmailTouched(true)}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ width: 250, marginTop: "20px"}}
            type="email"
            value={email}
          />
          <TextField
            error={showErrorMessage}
            fullWidth
            helperText={showErrorMessage ? 'Message must be at least 10 characters' : ''}
            label="Message"
            multiline
            onBlur={() => setMessageTouched(true)}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            sx={{ width: 250, marginTop: "20px"}}
            value={message}
          />
          <Button 
            sx={{ width: 250, marginTop: "20px"}}
            type="submit" 
            variant="contained"
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
