import { FC, useState } from 'react';
import { Alert, Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import DownloadIcon  from '@mui/icons-material/Download';

type FormProps = {
  title?: string;
  subtitle?: string;
};

const Form: FC<FormProps> = ({ title, subtitle }) => {
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        m: '20px',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Drop a Line
      </Typography>
      <Avatar
        alt="Jacob Rosa"
        src="jacob-avatar.jpg"
        sx={{ 
          width: 250, 
          height: 250, 
          mt: '20px' 
        }}
      />
      <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            mt: '20px',
            width: 250,
        }}
      >
        <IconButton
            component="a"
            href="https://www.linkedin.com/in/jacob787/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <LinkedInIcon sx={{ color: 'green'}} />
        </IconButton>
        <IconButton 
            component="a"
            href="https://github.com/intocablebrr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <GitHubIcon sx={{ color: 'green'}} />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:jacobjames1117@gmail.com"
        >
          <MarkunreadIcon sx={{ color: 'green'}} />
        </IconButton>
        <IconButton
          component="a"
          href="/jacob-rosa_Resume.pdf"
          download
        >
          <DownloadIcon  sx={{ color: 'green'}} />
        </IconButton>
      </Box>
      {success && <Alert onClose={() => setSuccess('')} severity="success" sx={{ mt: '20px' }}>{success}</Alert>}
      {error && <Alert onClose={() => setError('')} severity="error" sx={{ mt: '20px' }}>{error}</Alert>}
      {!success && !error &&
        <>
          <TextField
            disabled={isLoading}
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: 250, mt: '20px' }}
          />
          <TextField
            disabled={isLoading}
            error={showErrorEmail}
            fullWidth
            helperText={showErrorEmail ? 'Enter a valid email' : ''}
            label="Email"
            name="email"
            onBlur={() => setEmailTouched(true)}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ width: 250, mt: '20px' }}
            type="email"
            value={email}
          />
          <TextField
            disabled={isLoading}
            error={showErrorMessage}
            fullWidth
            helperText={showErrorMessage ? 'Message must be at least 10 characters' : ''}
            label="Message"
            multiline
            onBlur={() => setMessageTouched(true)}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            sx={{ width: 250, margin: '20px 0 20px 0' }}
            value={message}
          />
          <Button
            loading={isLoading}
            sx={{ width: 250, backgroundColor: 'green' }}
            type="submit"
            variant="contained"
          >
            Send
          </Button>
        </>
      }
    </Box>
  );
};

export default Form;