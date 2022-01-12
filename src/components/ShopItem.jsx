import React, { useContext } from 'react';

import { ShopContext } from '../context';

function ShopItem({ id, name, price, img, description: des }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="shop-item shop__item">
      <h3 className="shop-item__title">{name}</h3>
      <img className="shop-item__img" src={img} alt={name} />
      <p className="shop-item__des">{des}</p>
      <div className="shop-item__price">price: ${price}</div>
      <button
        className="shop-item__add btn-add"
        onClick={() => addToCart({ id, name, price, img })}>
        Add to Cart
      </button>
    </div>
  );
}

export { ShopItem };
