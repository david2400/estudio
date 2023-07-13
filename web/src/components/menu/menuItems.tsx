import { Typography, MenuItem } from '@material-tailwind/react';
import Link from 'next/link';

export const MenuItems = ({
  title,
  description,
  href = '',
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <MenuItem className="hover:text-darkPurple">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  );
};
