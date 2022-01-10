import React from 'react';
import { CartItem } from './CartItem';

function Cart({ order = [], toggleCartView, removeFromCart, changeQuantity }) {
  const total = order.reduce((t, { price, quantity }) => (t += price * quantity), 0);
  const count = order.reduce((c, { quantity }) => (c += quantity), 0);

  const buy = (data) =>
    count > 0
      ? alert('No backend here, your data order: ' + JSON.stringify(data))
      : alert('No Cart Items Found');

  return (
    <div className="cart">
      <div className="cart__close" onClick={toggleCartView}>
        close
      </div>
      <h2 className="cart__title">Cart</h2>
      <div className="cart__list" style={{ overflow: 'auto', height: '40vh' }}>
        {order.length ? (
          order.map((item) => (
            <CartItem
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <span className="cart__no-order">No Cart Items Found</span>
        )}
      </div>

      <div className="cart__summary">
        <span>
          total: {count} {count !== 0 && 'key'}
          {count > 1 && 's'} | full price = ${total}
        </span>
        <button className="cart-btn" onClick={() => buy({ order, count, total })}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export { Cart };
