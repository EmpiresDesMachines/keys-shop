import React from 'react';
import { ShopItem } from './ShopItem';
function ShopList({ items = [], addToCart }) {
  if (!items.length) return <div className="shop-error">No data received</div>;

  return (
    <div className="shop__wrapper">
      {items.map((item) => (
        <ShopItem key={item.id} {...item} addToCart={addToCart} />
      ))}
    </div>
  );
}

export { ShopList };
