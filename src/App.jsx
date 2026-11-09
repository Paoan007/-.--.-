import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserLayout from './components/layout/UserLayout'
import Dashboard from './pages/user/Dashboard'
import Profile from './pages/user/Profile'
import BuyTickets from './pages/user/BuyTickets'
import BuyShirts from './pages/user/BuyShirts'
import Cart from './pages/user/Cart'
import Orders from './pages/user/Orders'
import MyTickets from './pages/user/MyTickets'
import QRTicket from './pages/user/QRTicket'
import Wallet from './pages/user/Wallet'
import TokenHistory from './pages/user/TokenHistory'
import MyShirts from './pages/user/MyShirts'

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/user" element={<UserLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="buy-tickets" element={<BuyTickets />} />
      <Route path="buy-shirts" element={<BuyShirts />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tickets" element={<MyTickets />} />
      <Route path="qr-ticket" element={<QRTicket />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="token-history" element={<TokenHistory />} />
      <Route path="shirts" element={<MyShirts />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}