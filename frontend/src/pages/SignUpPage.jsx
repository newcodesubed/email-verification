import{motion} from 'framer-motion'

export default function SignUpPage() {
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
        <form onSubmit={handleSignUP}></form>
        </div>
    </motion.div>
  )
}
