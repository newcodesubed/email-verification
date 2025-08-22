import{motion} from 'framer-motion'
import Input from '../components/Input';
import {User, Mail, Lock} from 'lucide-react';
import { useState } from 'react';
import {Link} from "react-router-dom"
export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUP = (e) => {
        e.preventDefault();
        
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
            <motion.button
                type="submit"
className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                    Sign Up
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
