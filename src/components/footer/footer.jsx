import * as React from 'react';
import Box from '@mui/material/Box';
import { blue, green } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: green,
        '&:hover': {
          backgroundColor: blue
        },
      }}
    />
  );
}