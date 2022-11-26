import '/src/MuiClassNameSetup'
import Container from '@mui/material/Container';

import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <h1 className={'text-red-400'}>Hello world</h1>
    </Container>
  );
};

export default Home;
