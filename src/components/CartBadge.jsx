import React from 'react';
import cart from '../assets/img/cart.svg';

function CartBadge({ quantity = 0, toggleCartView }) {
  return (
    <div className="cart-badge" onClick={toggleCartView}>
      <img className="cart-badge__img" src={cart} width={32} height={32} alt="cart" />
      <span className="cart-badge__quantity">{quantity}</span>
    </div>
  );
}

export { CartBadge };
