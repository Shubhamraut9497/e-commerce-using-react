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

  const handleRemoveItem = () => {
    dispatch(deleteItem(data.id));
  };

  return (
    <div className="d-flex justify-content-between m-3 ">
      <div>
        <Image
          src={data.image}
          placeholder={data.title}
          width={60}
          height={60}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h3>{data.title}</h3>
      <div className="col-lg-1 ">
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
      <h3>$ {(count * data.price).toFixed(2)}</h3>
      <button className="btn btn-outline-dark h-25" onClick={handleRemoveItem}>
        Remove
      </button>
    </div>
  );
}

export default Cart;
