import Link from 'next/link';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex items-center gap-4'>
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            MovieWorld
          </span>
          
        </Link>
        <DarkModeSwitch />
        
      </div>
      <div className='flex gap-12'>
        <MenuItem title='HOME' address='/' Icon={AiFillHome} />
        <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill} />
        
        <SignedIn>  
          <UserButton />
        </SignedIn>
        <SignedOut>   
<MenuItem title='SIGN IN' address='/sign-in' Icon={AiFillHome} />
          {/* <SignInButton /> */}
        </SignedOut>
      </div>
    </div>
  );
}


