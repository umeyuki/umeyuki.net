import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://www.umeyuki.net';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <Link href="/">
          <a>
            <div className="flex justify-start items-center p-4">
              <Image
                className="rounded-2xl"
                src="/profile.jpeg"
                alt="Profile Logo"
                width={64}
                height={64}
              />
              <h1 className="text-lg px-4 text-black hover:text-gray-600">
                明日には忘れているだろう
              </h1>
            </div>
          </a>
        </Link>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 mx-auto">{children}</div>
      </main>
      <footer className="py-8"></footer>
    </>
  );
};

export default Layout;
