import Link from 'next/link';
import Logo from "@/app/UI/Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-gray-300 text-base">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/socialmedia/facebook.png" alt="Facebook" className="h-6 w-6 hover:opacity-80" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/socialmedia/twitter.png" alt="Twitter" className="h-6 w-6 hover:opacity-80" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/socialmedia/linkedin.png" alt="LinkedIn" className="h-6 w-6 hover:opacity-80" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">Solutions</h3>
            <ul role="list" className="space-y-4">
              {['Elearning', 'Analytics', 'Environmental Studies', 'Insights'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-base text-black hover:text-gray-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase mb-4">Support</h3>
            <ul role="list" className="space-y-4">
              {['Pricing', 'Documentation', 'Guides', 'Certification'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-base text-gray-800 hover:text-gray-700">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-base text-black text-center">
            &copy; 2024 Environmental Institute of Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}