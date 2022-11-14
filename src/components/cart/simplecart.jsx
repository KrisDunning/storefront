import React from 'react';
import { Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../../store/actions';
import { connect } from 'react-redux';

const SimpleCart = (props) => {
  const [open, setOpen] = React.useState(false);
  let cartItems = useSelector(state => state.cart.cartProducts)
  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        {`Cart(${cartItems.length})`}
      </Button>
      {open && cartItems.map((product, index) => {
        return(
          <li key={`simpleCart-${index}`}>
          <Typography>
            {product.name}
          </Typography>
          <Button onClick={()=>props.removeFromCart(product)}  variant="outlined" startIcon={<DeleteIcon />}>
          </Button>
        </li>
          )
      })}
    </>
  )
};


const mapStateToProps=(cart)=>{
  return {
    cart:cart.cartProducts,
  }
};
const mapDispatchToProps={
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

