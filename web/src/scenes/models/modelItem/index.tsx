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
  return (
    <Card className='col-span-6 mt-6 w-96'>
      <CardHeader color='blue-gray' className='relative h-56'>
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
