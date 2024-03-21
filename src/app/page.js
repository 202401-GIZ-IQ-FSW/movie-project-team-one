'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-center text-lg'>
      <p className='mr-3'>Movie project</p>

      <Link href='/contact'>
        <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Go to Contact Page
        </button>
      </Link>
    </div>
  );
}
