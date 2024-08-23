import {  Montserrat } from "next/font/google";
import "./globals.css";
import Maintenance from '@/app/UI/Maintenace';
import { ContactUs } from "./UI/Question";
import Navbar from "./UI/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "elearning",
  description: "EIK trainings portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#EAEFD8] text-base lg:text-sm 2xl:text-base`}>
        {
          false?
          <Maintenance/>
          :
          <>
            <Navbar />
            {children}
            <ContactUs />
            <footer className="bg-primary h-60 w-full mt-10"></footer>
          </>
        }
      </body>
    </html>
  );
}
