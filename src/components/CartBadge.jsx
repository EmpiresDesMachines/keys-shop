import React from 'react';
import cart from '../assets/img/cart.svg';
import { ShopContext } from '../context';

function CartBadge({ quantity = 0 }) {
  const { toggleCartView } = React.useContext(ShopContext);
  return (
    <div className="cart-badge" onClick={toggleCartView}>
      <img className="cart-badge__img" src={cart} width={32} height={32} alt="cart" />
      <span className="cart-badge__quantity">{quantity}</span>
    </div>
  );
}

export { CartBadge };
