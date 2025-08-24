import FloatingShap from './components/FloatingShap'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

import { Route, Routes } from 'react-router-dom'
import { EmailVerificationPage } from './pages/EmailVerificationPage'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import { useEffect } from 'react'

export default function App() {

  const {isCheckingAuth, checkAuth, isAuthenticated, user}= useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth])

  console.log("isauthenticated", isAuthenticated);
  console.log("user", user);


  return (
    <div className='min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
      <FloatingShap
        color='bg-green-500'
        size='w-64 h-64'
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShap
        color='bg-emerald-500'
        size='w-48 h-48'
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShap
        color='bg-lime-500'
        size='w-32 h-32'
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/verify-email" element={<EmailVerificationPage/>} />

        {/* Add more routes as needed */}
      </Routes>
      <Toaster />
      </div>
  )
}
