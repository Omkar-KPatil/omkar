import Product from './product';

function ProductTab () {
    let  styles ={
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"centre",
        alignment:"centre"
    }
 
  return (
    <div style={styles}>
       <Product title="logitech MX Master" idx={0} /> 
       <Product title="Apple pencil (2nd gen)" idx={1}/> 
       <Product title="zebronic zeb-transformer" idx={2}/> 
       <Product title="petronics toad 23" idx={3}/> 
       

    </div>
  );
}

export default ProductTab