import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ProductsContext } from './contexts/ProductsContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  const CheckoutData = ({ children }: any) => {
    const { userCheckoutInformation } = useContext(ProductsContext)

    if (!!userCheckoutInformation?.location && !!userCheckoutInformation?.paymentMethod)
      return children
    return <Navigate to="/checkout" />
  }

  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<CheckoutData><Success /></CheckoutData>} />
      </Route>
    </Routes>
  )
}
