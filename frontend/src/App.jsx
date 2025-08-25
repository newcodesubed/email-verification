import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { EmailVerificationPage } from './pages/EmailVerificationPage'
import { DashboardPage } from './pages/DashboardPage'

import FloatingShap from './components/FloatingShap'
import { useAuthStore } from './store/authStore'

//protecting routes that require authentication
const ProtectedRoute = ({children})=>{
  const {isAuthenticated,user}= useAuthStore();
  if(!isAuthenticated){
    return <Navigate to='/login' replace />
  }

  if(user && !user.isVerified){
    return <Navigate to='/verify-email' replace />
  }
  return children;
}

//redirect authenticated user to the home page
function RedirectAuthenticated({ children }) {
  const { isAuthenticated, user } = useAuthStore();
  return (isAuthenticated && user.isVerified) ? <Navigate to="/" replace /> : children;
}


export default function App() {
// isCheckingAuth,
  const { checkAuth, isAuthenticated, user}= useAuthStore();

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
        <Route path="/" element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
        } />
        <Route path="/login" element={
          <RedirectAuthenticated>
            <LoginPage />
          </RedirectAuthenticated>
        } />
        <Route path="/signup" element={
          <RedirectAuthenticated>
            <SignUpPage/>
          </RedirectAuthenticated>
        } />
        <Route path="/verify-email" element={<EmailVerificationPage/>} />

        {/* Add more routes as needed */}
      </Routes>
      <Toaster />
      </div>
  )
}
