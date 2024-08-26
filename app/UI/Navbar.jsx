'use client';

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Trainings', href: '/trainings', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Account', href: '/account', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-md">
      <div className="relative bg-gradient-to-r from-gray-300 to-primary w-4/5 max-w-md p-8 rounded-3xl shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-800 hover:text-red-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"> 
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex justify-center mb-6 mt-8 gap-16">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <img src="/forest.svg" alt="Logo" className="h-12" />
        </div>
        <button className="w-full p-2 rounded flex items-center justify-center mb-4 bg-transparent gap-3 text-gray-800">
          <Image src="/google.svg" alt="My SVG" width={30} height={30} />
          Continue with Google
        </button>
        <button className="w-full p-2 rounded flex items-center justify-center mb-4 bg-transparent gap-3 text-gray-800">
          <Image src="/cell-phone.svg" alt="My SVG" width={30} height={30} />
          Continue with Mobile
        </button>
        <form>
          <input type="email" placeholder="Username or Email" className="w-full p-2 mb-4 border rounded-xl bg-gray-100 text-center" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-xl bg-gray-100 text-center" />
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-gray-600 hover:underline text-sm">Forgot Password?</a>
            <a href="#" className="text-white hover:underline text-sm">Sign Up</a>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="w-2/5 bg-secondary p-2 rounded-full text-white">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl: '/instructor1.jpeg',
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50 shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/">
                  <div className="flex flex-shrink-0 items-center m-2">
                    <Logo />
                  </div>
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-green-700' : 'text-black',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center space-x-2 text-sm">
                      <span className="sr-only">Open user menu</span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-black" />
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={currentUser.imageUrl}
                        alt=""
                        width={36}
                        height={36}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/account"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/settings"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setIsLoginOpen(true)}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block w-full text-left px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Login
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-green-700' : 'text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
      )}
    </Disclosure>
  );
}