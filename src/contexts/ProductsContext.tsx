import { createContext, useState, ReactNode } from 'react'
import { coffeeCategories, Product, productsData } from '../assets/productsData';

interface ProductsContextType {
  products: Product[];
  categories: string[];
  cart: Cart;
  updateCartProduct: (product: Product, selectedProductAmount: number) => void;
  userCheckoutInformation: any
  setUserCheckoutInformation: any
}

interface Cart {
  products: CartProduct[];
}

export interface CartProduct {
  product: Product;
  amount: number;
  value: string;
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const products = productsData
  const categories = coffeeCategories
  const [cart, setCart]: Cart = useState({ products: [] })
  const [userCheckoutInformation, setUserCheckoutInformation] = useState()

  function updateCartProduct(product: Product, selectedProductAmount: number) {
    if (selectedProductAmount == 0 && cart.products.find((c: CartProduct) => c.product == product)) {
      setCart({ products: [...cart.products.filter((c: CartProduct) => c.product != product)] })
    }
    if (selectedProductAmount > 0)
      setCart({
        products: [
          ...cart.products.filter((c: CartProduct) => c.product != product),
          {
            product: product,
            amount: selectedProductAmount,
            value: product.price
          },
        ],
        // totalValue: cart.totalValue + (product.price * selectedProductAmount)
      })
  }

  return (
    <ProductsContext.Provider value={{ products, categories, cart, userCheckoutInformation, setUserCheckoutInformation, updateCartProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}