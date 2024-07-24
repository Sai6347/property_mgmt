import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TypographyAtom, { TypoProps } from './index';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';

export default {
  title: 'Components/TypographyAtom',
  component: TypographyAtom,
} as Meta;

const Template: StoryFn<TypoProps> = (args) => (
  <ThemeProvider theme={theme}>
    <TypographyAtom {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'body1',
  label: 'Default Typography',
  color: 'textPrimary',
};

export const Heading = Template.bind({});
Heading.args = {
  variant: 'h1',
  label: 'Heading Typography',
  color: 'textPrimary',
};

export const Subheading = Template.bind({});
Subheading.args = {
  variant: 'h2',
  label: 'Subheading Typography',
  color: 'textSecondary',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  variant: 'body1',
  label: 'Custom Color Typography',
  color: '#c9a938',
};
