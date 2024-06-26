import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from 'next/headers';
const inter = Inter({ subsets: ["latin"] });
import { CookiesProvider } from 'next-client-cookies/server';
import Navbar from "./component/Navbar";
import {ProductProvider} from "../app/context/ProductContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <CookiesProvider>
          <ProductProvider>
            {children}
          </ProductProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
