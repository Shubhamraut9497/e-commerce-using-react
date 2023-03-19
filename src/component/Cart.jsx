import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from './Reducer/UserSlice';
import Image from 'react-bootstrap/Image';

function Cart() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  const data = useSelector((state) => state.user);

  const handleRemoveItem = (item) => {
    dispatch(deleteItem(item));
  };

  // Calculate total price
  const totalPrice = data.cart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * count);
  }, 0);

  return (
    <>
      {data.cart.map((item) => {
        return (
          <>
            <div className="d-flex justify-content-between align-items-center m-3 text-center">
              <div>
                <Image
                  src={item.images[0]}
                  placeholder={item.title}
                  width={60}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3>{item.title}</h3>
              <div className="col-lg-1 d-flex align-items-center ">
                <button
                  className="border border-primary rounded"
                  onClick={handleDecrease}
                  disabled={count < 0}
                >
                  -
                </button>
                <span className="m-2 ">{count}</span>
                <button
                  className="border border-primary rounded"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <h3 className="align-self-center">$ {(count * item.price).toFixed(2)}</h3>
              <button
                className="btn btn-outline-dark h-25"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </>
        );
      })}
      <div className="d-flex justify-content-center m-3">
      <button className="btn btn-outline-dark h-25 mt-3 m-3">Payment</button>
        <h3 className="mt-3">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </>
  );
}

export default Cart;
