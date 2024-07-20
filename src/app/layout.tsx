import type { Metadata } from 'next';
import '../styles/globals.css';
import { Providers } from './providers';
import { Layout } from './components/molecules/layout/layout';

export const metadata: Metadata = {
  title: 'Deryn Cullen',
  description: 'Cellist and composer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='antialiased' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className='flex h-screen bg-zinc-50 dark:bg-black'>
        <Providers>
          <div className='flex w-full'>
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
