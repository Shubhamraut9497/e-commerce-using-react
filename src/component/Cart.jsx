import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncrementItem, decrementItem, deleteItem } from './Reducer/UserSlice';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import {FaLessThan} from 'react-icons/fa'

function Cart() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const data = useSelector((state) => state.user);
  console.log(data);
  const handleRemoveItem = (item) => {
    dispatch(deleteItem(item));
  };
  const handleIncrease=(id)=>{
    dispatch(IncrementItem(id))
  }
  const handleDecrease = (id) => {
    dispatch(decrementItem(id))
  };

  // Calculate total price
  const totalPrice = data.cart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
  }, 0);

  return (
    <>
      {data.cart && data.cart.map((item) => {
        return (
          <>
            <div className="d-flex justify-content-between align-items-center m-3 text-center shadow-lg p-3 mb-4 bg-primary rounded text-white">
              <div>
                <Image
                  src={item.images[0]}
                  placeholder={item.title}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 className="w-25">{item.title}</h4>
              <div className="col-lg-1 d-flex align-items-center w-5 ">
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleDecrease(item.id)}
                  
                >
                  -
                </button>
                <span className="m-2 ">{item.quantity}</span>
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              <h3 className="align-self-center">$ {(item.quantity * item.price).toFixed(2)}</h3>
              <button
                className="btn btn-warning h-25"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
      <hr/>
      <div className="d-flex justify-content-between m-3">
      <button className="btn btn-outline-dark h-25 mt-3 m-3"onClick={()=>navigate("/")}><FaLessThan/> Continue Shopping</button>
        <h3 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="btn btn-outline-dark h-25 mt-3 m-3"onClick={()=>navigate("/payment",{state:{data:totalPrice.toFixed(2)}})}>Payment</button>
      </div>
    </>
  );
}

export default Cart;
