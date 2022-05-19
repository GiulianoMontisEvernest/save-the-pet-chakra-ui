import { Container, Stack } from '@chakra-ui/react';

import Navigation from '../components/Navigation';
import Main from '../components/MainContainer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UsefulLinks from '../components/UsefulLinks';
import SuccessStories from '../components/SuccessStories';
import About from '../components/About';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => (
  <>
    <Navigation />
    <Main minHeight="100vh">
      <Container maxW={'5xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Hero />
          <Features />

          <UsefulLinks />
          <SuccessStories />
          <About />
        </Stack>
      </Container>

      {/* 
      <DarkModeSwitch />
      */}
    </Main>
  </>
);

export default Index;
