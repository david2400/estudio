import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const index = ({ children }: any) => {
  return (
    <main>
      <Card className="mt-6 w-full">
        <CardBody>
          <h1 className="text-3xl font-extrabold text-center text-fuchsia-300">
            Como Crear un Formulario con Tailwind CSS (Responsive)
          </h1>
          <div className="container ml-auto mr-auto flex items-center justify-center">
            <div className="w-full grid grid-cols-2">{children}</div>
          </div>
        </CardBody>
      </Card>
    </main>
  );
};

export default index;
