import Container from '@mui/material/Container';

import type { NextPage } from 'next';
import Link from '../components/link/Link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Link href="/login">Login</Link>
    </Container>
  );
};

export default Home;
