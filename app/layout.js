import {  Montserrat } from "next/font/google";
import "./globals.css";
import { MobileTopMenu, MobileSideMenu, TopMenu } from "./UI/Menus";
import Maintenance from '@/app/UI/Maintenace';

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
          true? //TODO: change to false
          <Maintenance/>
          :
          <>
            <TopMenu />
            <MobileTopMenu />
            <MobileSideMenu />
            {children}
            <footer className="bg-primary h-60 w-full mt-10"></footer>
          </>
        }
      </body>
    </html>
  );
}
