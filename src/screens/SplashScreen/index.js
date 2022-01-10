import React from 'react';
import { Logo, Sub, Text, Container } from '../../components';

export const SplashScreen = () => {
  return (
    <Container align='center' justify='center'>
      <Logo />
      <Text>Star Wars</Text>
      <Sub />
    </Container>
  );
}