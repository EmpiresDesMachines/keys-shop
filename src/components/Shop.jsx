import React from 'react';
import { ShopList } from './ShopList';
import { Loading } from './Loading';
import { CartBadge } from './CartBadge';
import { Cart } from './Cart';

import { ShopContext } from '../context';

function Shop() {
  let { setShopItems, items, isLoading, cart, isCartBadgeVisible, isCartOpen, setLoading } =
    React.useContext(ShopContext);

  React.useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/EmpiresDesMachines/d184c6aedb0c9d06b9ecbf2bf2c8972d/raw/6250d22c8f237dc96f20c2e38b874866a9c3ad16/games.json',
    )
      .then((data) => data.json())
      .then((v) => {
        setTimeout(() => {
          setShopItems(v.items);
        }, 1000);
      })
      .catch((e) => {
        console.log(e);
        setLoading();
      });
  }, []); // eslint-disable-line

  const quantity = cart.reduce((count, { quantity }) => (count += quantity), 0);

  return (
    <main className="shop">
      {isCartOpen && <Cart order={cart} />}
      {isCartBadgeVisible && <CartBadge quantity={quantity} />}
      <div className="container">{isLoading ? <Loading /> : <ShopList items={items} />}</div>
    </main>
  );
}

export { Shop };
