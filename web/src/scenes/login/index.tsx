import { LockClosedIcon } from '@heroicons/react/20/solid';
import { FormattedMessage } from 'react-intl';
import { Button, Input } from '@material-tailwind/react';
import { useIntl } from 'react-intl';

export const Login = () => {
  const intl = useIntl();

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href="#"
                className="font-medium text-darkPurple hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8" action="#" method="POST">
            <div className="my-9 rounded-md shadow-sm">
              <div className="my-6">
                <Input
                  size="lg"
                  color="purple"
                  label={intl.formatMessage({ id: 'email' })}
                  error={false}
                />
              </div>
              <div className="my-4">
                <Input
                  type="password"
                  size="lg"
                  color="purple"
                  label={intl.formatMessage({ id: 'password' })}
                  error={false}
                />
              </div>
            </div>
            <div className="mt-12">
              <Button
                type="submit"
                size="md"
                className="group relative flex justify-center rounded-md border border-transparent bg-cyan-500 py-3 px-4 text-sm font-medium text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                fullWidth
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
                <FormattedMessage id="signIn" defaultMessage="signIn" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
