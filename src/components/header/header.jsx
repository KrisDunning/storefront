import * as React from 'react';
import { Grid , Item} from "@mui/material"

export default function Header() {

  return (
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>Our Store Name</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Cart(0)</Item>
  </Grid>
</Grid>

  )
}