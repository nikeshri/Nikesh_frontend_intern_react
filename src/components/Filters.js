
import { CartState } from "../context/Context";


const Filters = () => { // It is used for the future searching options 
  const {
    productState: {  },
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter for future used</span>
      
    

     
    </div>
  );
};

export default Filters;
