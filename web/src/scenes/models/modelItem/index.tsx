/** @format */

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ImageModel } from "@scenes/models/model/model-image";
const Models = ({ product }: any) => {
  const { brad, description, images } = product;
  console.log(images);
  return (
    <Card className='col-span-4 mt-6 w-96'>
      <CardHeader color='blue-gray' className='relative'>
        <ImageModel images={images} className="h-full"></ImageModel>
      </CardHeader>
      <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          UI/UX Review Check
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default Models;
