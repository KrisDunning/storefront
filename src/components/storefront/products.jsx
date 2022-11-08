import * as React from 'react';
import { Container, ImageList, ListSubheader, ImageListItem, ImageListItemBar } from '@mui/material';

export default function Products() {

  return (

    <Container>
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={1}>
          <ListSubheader component="div">Electronics</ListSubheader>
        </ImageListItem>
        <ImageListItem key={'Image1'}>
          <img
            src={'../../TACP.png'}
            srcSet={'../../TACP.png'}
            alt={'TACP Logo'}
            loading="lazy"
          />
          <ImageListItemBar
            title={'Image Title'}
            subtitle={'Image Author'}
          />
        </ImageListItem>
      </ImageList>
    </Container>
  )

}
