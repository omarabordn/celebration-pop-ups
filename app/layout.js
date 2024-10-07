import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Home from "./assests/home.svg";
import Celebrate from "./assests/celebrate.svg"
import Reward from "./assests/reward.svg"
import { motion } from "framer-motion";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pop-up Task",
  description: "best celebration popups page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex flex-row justify-center shadow-md"
          style={{ background: 'linear-gradient(180deg, #F3BA2F 75%, #FFE02E 100%)' }}>
          <Link href='/'>
            <button className="p-2"><Image width={25} height={25} priority src={Home} /></button>
          </Link>
          <Link href='/celebrate'>
            <button className="p-2"><Image width={25} height={25} priority src={Celebrate} /></button>
          </Link>
          <Link href='/reward'>
            <button className="p-2"><Image width={25} height={25} priority src={Reward} /></button>
          </Link>
        </div>
        {children}

      </body>
    </html>
  );
}
