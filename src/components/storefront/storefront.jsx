import * as React from 'react';
import { Box, List, Link } from '@mui/material';

export default function Storefront() {

  return (
    <Box>
      <List>
        <Link href="#">Electronics</Link>
        <Link href="#">Food</Link>
      </List>
    </Box>

  )
}