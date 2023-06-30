/** @format */

import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import SimpleInfiniteList from '@scenes/models/modelInfinitiHits';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SimpleInfiniteList></SimpleInfiniteList>
      {/* <ContactUs></ContactUs> */}
    </main>
  );
}
