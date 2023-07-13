import { Children, Fragment, useState } from 'react';
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from '@material-tailwind/react';
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { MenuItems } from '@components/menu/menuItems';
import classNames from 'classnames';
export const Menus = ({
  icon,
  title,
  items,
  className,
}: {
  icon?: any;
  title: string;
  items: Array<any>;
  className?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  return (
    <Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className="hover:text-darkPurple flex items-center gap-2 text-white"
            >
              {icon}
              {title}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {items.map(({ name, description, href }) => (
              <MenuItems
                title={name}
                description={description}
                href={href}
              ></MenuItems>
            ))}
          </ul>
        </MenuList>
      </Menu>
    </Fragment>
  );
};
