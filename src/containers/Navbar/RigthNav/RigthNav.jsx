import React from 'react';

import Ul from './Styles';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Inicio</li>
      <li>Categorias</li>
      <li>Carrito</li>
    </Ul>
  );
};

export default RightNav;
