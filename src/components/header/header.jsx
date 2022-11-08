import * as React from 'react';
import { Grid , Container} from "@mui/material"

export default function Header() {

  return (
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Container>Our Store Name</Container>
  </Grid>
  <Grid item xs={4}>
    <Container>Cart(0)</Container>
  </Grid>
</Grid>

  )
}