import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import data from '../Data.json';

const Booking = () => {
  const [prod, setProd] = useState();
  
  return (
    <div className='max-w-6xl flex justify-center'>
      {/* Dropdown start */}
      <div className='mt-24'>
        <label for='cars'>Book a product</label>
        <select
          className='ml-5'
          name='cars'
          id='cars'
          onChange={(e) => setProd(e.target.value)}
        >
          {data.map((d) => (
            <option value={d.name}>{d.name}</option>
          ))}
        </select>
        {/* Dropdown end */}
        {/* Date start */}
        <div>
          <span className='mr-2'>From: </span>
          <input type='date'  name='from' min={new Date().toLocaleDateString()} max="2022-05-30" />
          <br />
          <span className='mr-7'>To: </span>
          <input type='date' id='birthday' name='to' />
        </div>
        {/* Date end */}

        
      </div>
    </div>
  );
};

export default Booking;
