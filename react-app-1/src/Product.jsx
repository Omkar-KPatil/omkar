import './Product.css'
import Price from './price';
function Product ({title ,idx} ){
    let oldPrices=["12495","11900","1599","599"];
    let newPrices= ["8999","9199","899","782"];
    let Description =[
        ["8000 DPI ","S programmable button"],
        ["intuitive surface ","Designed for ipad"],
        ["Designed for ipad ","intuitive surface"],
        ["wireless " ,"  optical orientation"]
    ];
    return(
        <dir className='Product'> 
          <h4>{title}</h4>
          <p>{Description[idx][0]}</p>
          <p>{Description[idx][1]}</p>
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
         </dir>
    );
}
export default Product ;