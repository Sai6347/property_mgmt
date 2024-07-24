import { CssBaseline, Stack, ThemeProvider, styled } from '@mui/material';
import React from 'react';
import theme from './theme';
import TypographyAtom from '../src/components/atoms/Typography'


const StyledStack = styled(Stack) (({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    color: theme.palette.text.secondary
}));



const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledStack>
        <TypographyAtom variant='h1' label="Welcome to Property Management"/>
        <TypographyAtom 
          variant='body1' 
          color= '#ffff'
          label="Property management involves overseeing and handling the daily operations, maintenance, and administration of real estate properties. 
          This includes tasks such as tenant relations, rent collection, property maintenance, and ensuring compliance with relevant laws and regulations."/>
      </StyledStack>
    </ThemeProvider>
  );
};

export default App;
