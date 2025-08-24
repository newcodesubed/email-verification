import{motion} from 'framer-motion'
import Input from '../components/Input';
import {User, Mail, Lock, Loader} from 'lucide-react';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { useAuthStore } from '../store/authStore';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {signup,error,isLoading} = useAuthStore();

    const handleSignUP = async(e) => {
        e.preventDefault();
        try {
            await signup(email, password, name);
            navigate("/verify-email");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-md w-full bf-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl'
    >
        <div className='p-8'>
            <h2 className='text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text mb-6'>
            Create Account
        </h2>
        <form onSubmit={handleSignUP}>
            <Input
                icon={User}
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
            <PasswordStrengthMeter password={password}/>

            <motion.button
                type="submit"
className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
            {isLoading? <Loader className='animate-spin mx-auto'size={24}/>:"sign up"}
            </motion.button>

        </form>
        </div>
        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center rounded-b-2xl'>
            <p className='text-sm text-gray-400'>
                Already have an account? 
                <Link to={"/login"} className='text-green-400 hover:text-green-800 ml-1'>
                    Log In
                </Link>
            </p>

        </div>
    </motion.div>
  )
}
