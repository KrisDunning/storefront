import { connect } from 'react-redux';
import {selectCategory} from '../../store/actions';
import { ButtonGroup,Button } from '@mui/material';

const Categories = (props) => {
return(
  <>
<ButtonGroup variant="text" aria-label="text button group">
  {props.categories.map((category,index)=>(
    <Button
     key={`category-${index}`}
     onClick={()=> props.selectCategory(category.name)}
    >
      {category.displayName}
    </Button>
  ))}
  </ButtonGroup>
  
  </>
)
};

const mapStateToProps=(store)=>{
  return {
    categories:store.categories.categories,
  }
};
const mapDispatchToProps={
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
