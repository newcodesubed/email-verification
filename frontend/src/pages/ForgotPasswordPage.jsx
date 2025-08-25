import {motion} from 'framer-motion';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

export const ForgotPasswordPage = () => {
    const [email,setEmail]= useState("");
    const [isSubmitted,setIsSubmitted]= useState(false);

    const {isLoading, forgotPassword} = useAuthStore();

  return (
    <div>ForgotPasswordPage</div>
  )
}
