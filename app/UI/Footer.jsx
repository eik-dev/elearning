import { Menu } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Logo from "@/app/UI/Logo";
import { FacebookIcon, TwitterIcon, LinkedInIcon } from '@heroicons/react/24/solid'; // Import your icons here

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Logo/>
            {/* Company Description */}
            <p className="text-gray-800 text-base">
              Making the world a better place through constructing elegant hierarchies.
            </p> 
            <div className="flex space-x-6">
              {/* Social media icons */}
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-6 w-6 text-gray-600 hover:text-white" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-6 w-6 text-gray-600 hover:text-white" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="h-6 w-6 text-gray-600 hover:text-white" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">Solutions</h3>
            <ul role="list" className="space-y-4">
              {['Elearning', 'Analytics', 'Environmental Studies', 'Insights'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-base text-gray-600 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">Support</h3>
            <ul role="list" className="space-y-4">
              {['Pricing', 'Documentation', 'Guides', 'Certification'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-base text-gray-600 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-800 text-center">
            &copy; 2024 Environmental Institute of Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}