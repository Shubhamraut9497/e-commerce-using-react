import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from './Reducer/UserSlice';
import Image from 'react-bootstrap/Image';
import { incrementCount,decrementCount } from './Reducer/UserSlice2';
import { useNavigate } from 'react-router-dom';
import {FaLessThan} from 'react-icons/fa'

function Cart() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const data = useSelector((state) => state.user);
  const count=useSelector((state)=>state.cart);
  console.log(count);
  const handleRemoveItem = (item) => {
    dispatch(deleteItem(item));
  };
  const handleIncrease=(id)=>{
    const index = data.cart.findIndex(item => item.id === id);
    dispatch(incrementCount(index))
  }
  const handleDecrease = (id) => {
    const index = data.cart.findIndex(item => item.id === id);
    dispatch(decrementCount(index))
  };

  // Calculate total price
  const totalPrice = data.cart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * count.count);
  }, 0);

  return (
    <>
      {data.cart.map((item) => {
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
                <span className="m-2 ">{count.count}</span>
                <button
                  className="border border-primary rounded w-25"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              <h3 className="align-self-center">$ {(count.count * item.price).toFixed(2)}</h3>
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
