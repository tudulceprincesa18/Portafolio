import React from 'react';


import navStyles from '../navbar/index.module.css';

function Navbar() {
  return(
    <div className={navStyles.contenedor}>
      <button className={ navStyles.button }>Inicio</button>
      <button className={ navStyles.button }>Cv</button>
      <button className={ navStyles.button }>Contacto</button>
    </div>
  );
}

export default Navbar;