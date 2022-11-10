import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const [catStatus, setCatStatus] = useState('');

  const dispatch = useDispatch();

  const status = () => {
    const { payload } = dispatch(checkStatus());
    setCatStatus(payload);
  };

  return (
    <>
      <button type="button" onClick={status}>
        Check Status
      </button>
      <p className="catMsg">{catStatus}</p>
    </>
  );
};

export default CategoriesPage;
