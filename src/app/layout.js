import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import { ClerkProvider, ClerkLoaded,ClerkLoading } from '@clerk/nextjs';
// import SearchBox from '@/components/SearchBox';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Movie World',
  description: 'This is a movie database website',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      
    <html lang='en'>
      <body className={inter.className}>
      <Providers>
        <ClerkLoading> 
        <Header />
        </ClerkLoading>
        
          <ClerkLoaded> 

        
          <Header />
          <Navbar />
          
          {children}
        
          </ClerkLoaded>
        
    </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}