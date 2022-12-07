import './App.css';

function Products({product, addToCart}) {
  return (
    <div>
       <div className='flex' >
        {
        product.map((productItem , productIndex)=>{
            return(
            <div className='card' >
                <div className='items'>
                    <img src={productItem.url} width='40%'/>
                    <p className='nametxt'>{productItem.name} | {productItem.category}</p>
                    <p className='sellertxt'>{productItem.seller}</p>
                    <p className='price'>RS.{productItem.price} /- </p>
                    <button className='card button ' onClick={()=>addToCart(productItem)}> Add to Cart </button>
                </div>
                </div>
                )
            })
        } 
       </div>
    </div>
  );
}

export default Products;
