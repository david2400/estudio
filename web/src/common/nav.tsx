import { useState, createElement, Fragment } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Chip,
} from '@material-tailwind/react';

import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';
import { Menus } from '@components/menu';
import { Login } from '@scenes/login';
import { Modal } from '@components/modals/modal';

import Link from 'next/link';

const navigation = {
  sections: [
    {
      id: 'clothing',
      name: 'Clothing',
      items: [
        { name: 'Tops', href: '#' },
        { name: 'Dresses', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Denim', href: '#' },
        { name: 'Sweaters', href: '#' },
        { name: 'T-Shirts', href: '#' },
        { name: 'Jackets', href: '#' },
        { name: 'Activewear', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
    },
    {
      id: 'accessories',
      name: 'Accessories',
      items: [
        { name: 'Watches', href: '#' },
        { name: 'Wallets', href: '#' },
        { name: 'Bags', href: '#' },
        { name: 'Sunglasses', href: '#' },
        { name: 'Hats', href: '#' },
        { name: 'Belts', href: '#' },
      ],
    },
    {
      id: 'brands',
      name: 'Brands',
      items: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Models', href: '/' },
    { name: 'Contact Us', href: '/contactUs' },
  ],
};

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {navigation.sections.map((category) => (
        <Menus title={category.name} items={category.items}></Menus>
      ))}
      {navigation.pages.map((page) => (
        <Link href={page.href}>
          <ListItem className="py-2 pr-4">
            <Typography
              as="a"
              href="#"
              variant="small"
              color="white"
              className="hover:text-darkPurple flex items-center gap-2 font-normal"
            >
              <CubeTransparentIcon className="h-[18px] w-[18px]" />
              {page.name}
            </Typography>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setopenModal] = useState(false);

  return (
    <>
      <Navbar className="bg-gradient-to-r from-pink-400 to-red-300" fullWidth>
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Material Tailwind
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button
              variant="gradient"
              onClick={() => setopenModal(true)}
              fullWidth
            >
              Sign In
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse className="block lg:hidden" open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 ">
            <Button
              variant="gradient"
              fullWidth
              onClick={() => setopenModal(true)}
            >
              Sign In
            </Button>
          </div>
        </Collapse>
      </Navbar>
      <Modal
        title="Sign in to your account"
        open={openModal}
        setOpen={setopenModal}
      >
        <Login />
      </Modal>
    </>
  );
}
