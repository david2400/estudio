/** @format */

import { useState } from 'react';
import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from '@material-tailwind/react';
import {
  HeartIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
export const FormContactUs = () => {
  const [check, setCheck] = useState(false);

  return (
    <form className="grid grid-cols-12 gap-4 bg-white px-8 pt-6 pb-8 mb-4">
      <div className="col-span-12 lg:col-span-6">
        <Input color="purple" label="Nombres y Apellidos" />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <Input color="purple" label="Email" />
      </div>
      <div className="col-span-12">
        <Input color="purple" label="Asunto" />
      </div>
      <div className="col-span-12">
        <Textarea color="purple" label="Mensaje" />
      </div>
      <div className="col-span-12">
        <Checkbox
          defaultChecked={check}
          onClick={() => {
            setCheck(!check);
          }}
          label={
            <Typography className="text-fuchsia-300">
              Deseas trabajar con nosotros?
            </Typography>
          }
          color="purple"
          icon={<HeartIcon className="h-4 w-4 text-white"></HeartIcon>}
        />
      </div>

      <div className="col-span-12 flex justify-center gap-4">
        <Button className="flex items-center gap-3" type="submit">
          <PaperAirplaneIcon className="h-4 w-4"></PaperAirplaneIcon>Enviar
        </Button>
        <Button className="flex items-center gap-2 bg-darkPurple">
          <XMarkIcon className="h-4 w-4"></XMarkIcon>
          Limpiar
        </Button>
      </div>
    </form>
  );
};
