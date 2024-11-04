import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";
import Cursor from "./components/Cursor";
import { ReactNode } from 'react';





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xscriptor",
  description: "X — Óscar Preciado",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <TransitionProvider>{children}</TransitionProvider>
        <Cursor />
        
      </body>
    </html>
  );
}

