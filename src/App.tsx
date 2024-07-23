import { CssBaseline, Stack, ThemeProvider, Typography, styled } from '@mui/material';
import React from 'react';
import theme from './theme';


const StyledStack = styled(Stack) (({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    color: theme.palette.text.secondary
}));



const App: React.FC = () => {
  return (
    // <div><h1>Welcome to Property Management</h1></div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledStack>
        <Typography variant='h1'>Welcome to Property Management</Typography>
      </StyledStack>
    </ThemeProvider>
  );
};

export default App;
