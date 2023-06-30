/** @format */

import { useState } from "react";
import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import {
  HeartIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
export const FormContactUs = () => {
  const [check, setCheck] = useState(false);

  return (
    <form className='bg-white px-8 pt-6 pb-8 mb-4'>
      <div className='mb-4'>
        <div className='grid grid-flow-row sm:grid-flow-col gap-3'>
          <div className='sm:col-span-4 justify-center'>
            <Input color='purple' label='Nombres y Apellidos' />
          </div>
          <div className='sm:col-span-4 justify-center'>
            <Input color='purple' label='Email' />
          </div>
        </div>
      </div>
      <div className='mb-4'>
        <Input color='purple' label='Asunto' />
      </div>
      <div className='mb-4'>
        <Textarea color='purple' label='Mensaje' />
      </div>
      <div className='mb-4'>
        <Checkbox
          defaultChecked={check}
          onClick={() => {
            setCheck(!check);
          }}
          label={
            <Typography className='text-fuchsia-300'>
              Deseas trabajar con nosotros?
            </Typography>
          }
          color='purple'
          icon={<HeartIcon className='h-4 w-4 text-white'></HeartIcon>}
        />
      </div>

      <div className='flex items-center justify-between'>
        <Button className='flex items-center gap-3' type='submit'>
          <PaperAirplaneIcon className='h-4 w-4'></PaperAirplaneIcon>Enviar
        </Button>
        <Button className='flex items-center gap-2 bg-darkPurple'>
          <XMarkIcon className='h-4 w-4'></XMarkIcon>
          Limpiar
        </Button>
      </div>
    </form>
  );
};
