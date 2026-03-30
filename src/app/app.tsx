// Uncomment this line to use CSS modules
// import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import { Button, Avatar, TextField, Alert, Box, Typography, IconButton, AppBar, Container, Tabs, Tab  } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import styles from './app.module.scss'
import { useState } from 'react';
import { Height } from '@mui/icons-material';
import Header from './components/header/header';
import HomePage from './pages/home/home';
import ProjectsPage from './pages/projects/projects';

export function App() {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [messageTouched, setMessageTouched] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState(0);


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
        setLoading(true);
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

      setLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

      
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
