import React from 'react'
import  {moneyFormat}  from '../helper'
function Product({product, total, money, basket, setBasket}) {

  const basketItem =  basket.find(item => item.id === product.id)

  const addBasket = () => {
    const checkBasket = basket.find(item => item.id === product.id)
    //ürün daha önce eklenmiş
    if (checkBasket) {   

      checkBasket.amount +=1;
      setBasket([...basket.filter(item =>item.id !== product.id), checkBasket]);
  }else{
    setBasket([...basket, {
      id: product.id,
      amount:1

    }])
  }
}
const removeBasket =() => {
  const currentBasket = basket.find(item => item.id === product.id)
  const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
    currentBasket.amount -=1
  if (currentBasket.amount===0) {  
    setBasket([...basketWithoutCurrent]); 
  }else{

    setBasket([...basketWithoutCurrent, currentBasket]);
}
}


  return (


    
    <div className='product'>
      <img src={product.image} alt=""/>
        <h5>{product.title}</h5>
        <div className='price'>{moneyFormat(product.price)}₺</div>
        <div className='actions'>
          <button className='sellButton'disabled={!basketItem}onClick={removeBasket}>Sat</button>
          <span className='amount'>{basketItem && basketItem.amount || 0}</span>
          <button className='buyButton'disabled={total + product.price>money} onClick={addBasket}>Satın Al</button>          
        </div>
          <style>{`
          .product{
            
            padding:15px;
            background-color: rgba(0, 100, 0, 0.2);
            border-radius:10px;
            border:1px solid #ddd;
            margin-bottom:20px;
            width:30%;
             
        }
        .product img{
          width:100%;

        }
        .product h5{
          font-size:20px;
          margin-bottom:10px;
        }
        .product .price{
          font-size:20px;
          font-weight:550;
        }
        .product .actions{
          display:flex;
          align-items:center;
          margin-top:20px;
        }

        .actions button{
          height:40px;
          padding:0 15px;
          flex:1;
          cursor:pointer;

        }
        .actions .amount{
          font-size:18px;
          width:50px;
         text-align:center;
         font-weight:bold;
         font-size:17px;
         
        
        }
        .actions .buyButton{
          background:linear-gradient(to top, green, yellowgreen);
          color:white;
          font-size:14px;
          font-weight:550;
          border-radius:0 10px 10px 0;
          
          
        }
        .actions .sellButton{
          background:linear-gradient(to top, green, yellowgreen);
          font-size:14px;
          color:white;
          font-weight:550;
          border-radius:10px 0 0 10px
          
        }
        .actions button[disabled] {
          opacity:0.3;
          cursor:not-allowed;
        }
      

          `}
        
        </style>

        </div>
  )
}

export default Product