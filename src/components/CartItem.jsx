import React from 'react';

function CartItem({ id, name, price, quantity, img, removeFromCart, changeQuantity }) {
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={img} width={160} height={74} alt={name} />
      <span className="cart-item__name">{name}</span>
      <div className="cart-item__total">
        <span className="cart-item__price">${price}</span>&nbsp;x&nbsp;
        <span className="cart-item__quantity">{quantity}</span>&nbsp;=&nbsp;
        <span className="cart-item__result">${price * quantity}</span>
      </div>
      <div className="cart-item__controls">
        <span className="cart-item__btn" onClick={() => changeQuantity('minus', id)}>
          -
        </span>
        <span className="cart-item__btn" onClick={() => changeQuantity('plus', id)}>
          +
        </span>
        <span className="cart-item__remove" onClick={() => removeFromCart(id)}>
          remove
        </span>
      </div>
    </div>
  );
}

export { CartItem };
