import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import PageTransition from '@/components/PageTransition';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Photography Portfolio',
  description: 'Photography website for displaying',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>
          <div className="h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
