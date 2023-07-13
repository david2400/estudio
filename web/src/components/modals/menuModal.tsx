import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

const MenuModal = ({ open, setOpen, title, children }: any) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative w-96 z-10"
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0  overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="border-5 border-black pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full overflow-y-scroll bg-white">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start my-5 justify-between">
                        <Dialog.Title className="text-xl mx-5 font-bold text-gray-900">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 flex items-center">
                          <Button
                            className="p-2"
                            variant="outlined"
                            color="red"
                            onClick={() => setOpen(false)}
                          >
                            <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>
                      <div>{children}</div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MenuModal;
