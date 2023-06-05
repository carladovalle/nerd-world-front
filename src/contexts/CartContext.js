import { 
    useState,
    createContext, 
    useContext
} from 'react';
  
const CartContext = createContext({
    cart: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCart: () => {},
});
  
const CartProvider = ({ children }) => {
    const products = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(products);
  
    return (
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    );
};
  
  const useCart = () => useContext(CartContext);
  
  export { CartProvider, useCart }; 