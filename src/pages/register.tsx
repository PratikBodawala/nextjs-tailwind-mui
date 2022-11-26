import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { NextPage } from 'next';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Link  from '@mui/material/Link';
import { Copyright } from '../components/copyright';

const Register: NextPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="mt-10 flex flex-col items-center">
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                autoComplete="given-name"
                name="firstName"
                required
                className={'w-full'}
                id="firstName"
                aria-label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                required
                id="lastName"
                aria-label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                required
                id="email"
                aria-label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                required
                name="password"
                aria-label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={
                  <Box>
                    I have read and accept the{' '}
                    <Link href="/tos">term and condition</Link>.
                  </Box>
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright className="mt-8" />
    </Container>
  );
};

export default Register;
