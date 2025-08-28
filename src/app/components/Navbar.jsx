import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-cyan-400 py-4 px-12 flex items-center justify-between'>
            <Link href={"/"}><h1 className='text-white font-bold text-lg uppercase'>Medi-Snap</h1></Link>

            <div>
                <Link href={"/reminders"} className='cursor-pointer hover:bg-emerald-600 bg-emerald-500 py-1.5 px-4 rounded-md text-white text-sm font-semibold mx-2'>Reminders</Link>
                <button className='cursor-pointer hover:bg-red-600 bg-red-500 py-1.5 px-4 rounded-md text-white text-sm font-semibold'>Logout</button>
                <Link href={"/login"} className='cursor-pointer hover:bg-emerald-600 bg-emerald-500 py-1.5 px-4 rounded-md text-white text-sm font-semibold mx-2'>Login</Link>
                <Link href={"/login"} className='cursor-pointer hover:bg-emerald-600 bg-emerald-500 py-1.5 px-4 rounded-md text-white text-sm font-semibold mx-2'>Register</Link>
            </div>

        </nav>
    )
}

export default Navbar
