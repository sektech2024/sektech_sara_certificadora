'use client'

import './page.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Card as MuiCard } from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      gap: theme.spacing(4),
      padding: theme.spacing(2),
      maxHeight: '90%',
      marginTop: 0,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
      width: '390px',
    },
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'auto',
  padingBottom: theme.spacing(12),
  [theme.breakpoints.up('sm')]: {
    paddingBottom: 0,
    height: '100dvh',
  },
}));

export default function Login() {
  const [cpfError, setCpfError] = React.useState(false);
  const [cpfErrorMessage, setCpfErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      cpf: data.get('cpf'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const cpf = document.getElementById('cpf') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!cpf.value) {
      setCpfError(true);
      setCpfErrorMessage('Campo CPF é obrigatório.');
      isValid = false;
    } else {
      setCpfError(false);
      setCpfErrorMessage('');
    }

    if (!password.value) {
      setPasswordError(true);
      setPasswordErrorMessage('Campo Senha é obrigatório.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="space-between" className="fundo">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: { xs: 'static', sm: 'fixed' },
            width: '100%',
            p: { xs: 2, sm: 4 },
          }}
        >
        </Stack>
        <Stack
          justifyContent="center"
          sx={{ height: { xs: '100%', sm: '100dvh' }, p: 2 }}
        >
          <div className="container">
          <Card className='card-login'>
              <Avatar
                alt="Logo"
                src="../img_login/semfundo.png"
                variant="rounded"
                sx={{
                  alignSelf: 'center', 
                  width: 'auto', 
                  height: 'auto',
                  backgroundImage: 'linear-gradient(to right bottom, #388e55, #409048, #4a9138, #569225, #639205);'
                }}
              />
            <Typography
              component="h1"
              sx={{ 
                    width: '100%', 
                    fontSize: 'clamp(2rem, 10vw, 2.15rem)', 
                    textAlign: 'center',
                 }}
            >
              LOGIN
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
                marginBottom: 2
              }}
            >
              <FormControl>
                <FormLabel htmlFor="cpf" className='txt-label'>CPF</FormLabel>
                <TextField
                    error={cpfError}
                    helperText={cpfErrorMessage}
                    id="cpf"
                    type="cpf"
                    name="cpf"
                    placeholder="999.999.999-99"
                    autoComplete="cpf"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={cpfError ? 'error' : 'primary'}
                    className='txt-input'
                  />
              </FormControl>
              <FormControl>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <FormLabel htmlFor="password" className='txt-label'>Senha</FormLabel>
                </Box>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  className='txt-input'
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                onClick={validateInputs}
                className='btn-login'
                >
                ACESSAR
              </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            </Box>
          </Card>
          </div>
        </Stack>
      </SignInContainer>
      </>
  );
}