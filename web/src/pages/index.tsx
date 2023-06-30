/** @format */

import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import SimpleInfiniteList from '@scenes/models/modelInfinitiHits';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12 bg-[#ffffff19]">
      <SimpleInfiniteList></SimpleInfiniteList>
      {/* <ContactUs></ContactUs> */}
    </main>
  );
}
