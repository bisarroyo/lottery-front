import React, { useState } from 'react';
import StyledBurger from './Styles';
import RightNav from '../RigthNav/RigthNav';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
