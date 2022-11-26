import '/src/MuiClassNameSetup'
import Container from '@mui/material/Container';

import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Link href="/login">Login</Link>
    </Container>
  );
};

export default Home;
