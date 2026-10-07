import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aurelia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('aurelia_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const addToCart = (product, size = 'M', color = null, quantity = 1) => {
    const chosenColor = color || (product.colors && product.colors[0]?.name) || 'Default';
    
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.size === size && item.color === chosenColor
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            edition: product.edition,
            price: product.price,
            image: product.image,
            size,
            color: chosenColor,
            quantity
          }
        ];
      }
    });

    showToast(`"${product.name}" (${size}) ditambahkan ke keranjang.`);
  };

  const removeFromCart = (id, size, color) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size && item.color === color)));
  };

  const updateQuantity = (id, size, color, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id, size, color);
      return;
    }
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id && item.size === size && item.color === color) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
