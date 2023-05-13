import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import React, { useRef } from 'react';
import './index.scss';

function Input() {
  return (
    <form>
      <input type='text' placeholder='Input city' />
    </form>
  );
}

export default Input;
