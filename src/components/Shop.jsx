import React from 'react';
import { ShopList } from './ShopList';
import { Loading } from './Loading';
import { CartBadge } from './CartBadge';
import { Cart } from './Cart';

function Shop() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const [cart, setToCart] = React.useState([]);

  const addToCart = (item) => {
    const hasOrder = cart.find((v) => v.id === item.id);

    if (!hasOrder) {
      setToCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    } else {
      setToCart((prevCart) =>
        prevCart.map((v) => (v.id === item.id ? { ...v, quantity: v.quantity + 1 } : v)),
      );
    }
  };

  const changeQuantity = (dir, id) => {
    if (dir === 'plus') {
      setToCart((prevCart) =>
        prevCart.map((v) => (v.id === id ? { ...v, quantity: v.quantity + 1 } : v)),
      );
    } else if (dir === 'minus') {
      setToCart((prevCart) =>
        prevCart.map((v) =>
          v.id === id ? { ...v, quantity: v.quantity > 1 ? v.quantity - 1 : 1 } : v,
        ),
      );
    }
  };

  const removeFromCart = (id) => {
    setToCart((prevCart) => prevCart.filter((item) => id !== item.id));
  };

  const [isCartOpen, setCartView] = React.useState(false);
  const [isCartBadgeVisible, setCartBadge] = React.useState(true);

  const toggleCartView = () => {
    setCartView((view) => !view);
    setCartBadge((view) => !view);
  };

  React.useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/EmpiresDesMachines/d184c6aedb0c9d06b9ecbf2bf2c8972d/raw/6250d22c8f237dc96f20c2e38b874866a9c3ad16/games.json',
    )
      .then((data) => data.json())
      .then((v) => {
        setTimeout(() => {
          v.items && setItems(v.items);
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  const quantity = cart.reduce((count, { quantity }) => (count += quantity), 0);

  return (
    <main className="shop">
      {isCartOpen && (
        <Cart
          removeFromCart={removeFromCart}
          toggleCartView={toggleCartView}
          order={cart}
          changeQuantity={changeQuantity}
        />
      )}
      {isCartBadgeVisible && <CartBadge quantity={quantity} toggleCartView={toggleCartView} />}
      <div className="container">
        {isLoading ? <Loading /> : <ShopList items={items} addToCart={addToCart} />}
      </div>
    </main>
  );
}

export { Shop };
