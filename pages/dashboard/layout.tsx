import { ReactNode } from 'react';
import '../styles/globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
