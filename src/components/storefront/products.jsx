import * as React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button , Grid} from '@mui/material';
import {addToCart, selectCategory} from '../../store/actions';
import {connect} from 'react-redux';

const Products = (props) => {
  console.log(props);
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {props.products.map((product,index)=>(
    <Grid item xs={2} sm={4} md={4} key={`product-${index}`}>
    <Card key={`product-${index}`}
    sx={{ maxWidth: 345, mt: 15 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
        alt="TACP logo"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={()=>{
          console.log('Clicked');
          addToCart(product);
        }}
        >Add to Cart</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  ))}
</Grid>
  )
}

const mapStateToProps=(store)=>{
  return {
    products:store.products,
  }
};
const mapDispatchToProps={
  selectCategory,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

