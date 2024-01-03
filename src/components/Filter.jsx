import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
      <div>
          <h3 className='serch-title'>Search contacs</h3>
          <input
        className='input'
        type="text"
        id="searchInput"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;