import * as React from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Button } from "@mui/material"
import SimpleCart from '../cart/simplecart';

export default function Header() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Container>
          <h1>
            Our Store Name
          </h1>
        </Container>
      </Grid>
      <Grid item xs={4}>
        <SimpleCart />
      </Grid>
    </Grid>

  )
}

