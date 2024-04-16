import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "ahsmus.com",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
