import React from 'react';

import { buttonLoading } from './../button-loading/ButtonLoading';

const Button = ({text, onHandleClick}) => (
  <button onClick={() => onHandleClick()}>
    {text}
  </button>
);

export default buttonLoading(Button);
