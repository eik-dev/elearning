import {  Montserrat } from "next/font/google";
import "./globals.css";
import Maintenance from '@/app/UI/Maintenace';
import { ContactUs } from "./UI/Question";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight:['400','600','800'] });

export const metadata = {
  title: "elearning",
  description: "EIK trainings portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#EAEFD8] text-base lg:text-sm 2xl:text-base`}>
        {
          true?
          <Maintenance/>
          :
          <>
            <Navbar />
            {children}
            <ContactUs />
            <Footer />
          </>
        }
      </body>
    </html>
  );
}
