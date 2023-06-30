import { Button, Typography, List, ListItem } from '@material-tailwind/react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-cyan-400 text-white">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
      <h1
        className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
      >
        <span className="text-teal-400">Free</span> until you're ready to launch
      </h1>
      <div className="flex flex-col px-5">
        <Typography variant="h1" className="text-center text-2xl">
          Nombre de la empresa
        </Typography>
        <div className="flex gap-3 py-3">
          <Button color="blue" className="hover:bg-blue-600 rounded-full">
            <FaFacebookF className="text-white w-7 h-7"></FaFacebookF>
          </Button>
          <Button color="light-blue" className="hover:bg-sky-500 rounded-full">
            <FaTwitter className="text-white w-7 h-7"></FaTwitter>
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-full shadow">
            <FaInstagram className="text-white w-7 h-7"></FaInstagram>
          </Button>
          <Button color="green" className="hover:bg-sky-500 rounded-full">
            <FaWhatsapp className="text-white w-7 h-7"></FaWhatsapp>
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
       
      </div>
    </div>

    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"
    >
      <span>© 2020 Appy. All rights reserved.</span>
      <span>Terms · Privacy Policy</span>
    </div>
  </footer>
);
export default Footer;
