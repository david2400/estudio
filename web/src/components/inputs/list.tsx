import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Flag } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { setLanguage } from "@store/language/language.slice";
import classNames from 'classnames';

export const ListSelect = () => {
  const dispatch = useDispatch();

  const handleLocaleChange = (e: any) => {
    const locale: string = e.value;
    dispatch(setLanguage({ idiom: locale }));
    setSelected(e);
  };

  const solutions = [
    {
      name: "Español",
      description: "Keep track of your growth",
      value: "es",
      icon: () => <Flag  name="co" />,
    },
    {
      name: "English",
      description: "Create your own targeted content",
      value: "en",
      icon: () => <Flag  name="us" />,
    },
  ];

  const [selected, setSelected] = useState(solutions[0]);

  return (
    <div className="w-56">
      <Listbox value={selected} onChange={handleLocaleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 px-4 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <div className="flex items-center">
              <div className="flex justify-start h-8 w-8 shrink-0 items-center text-white sm:h-8 sm:w-8">
                <selected.icon aria-hidden="true" />
              </div>
              <span className="flex justify-center w-full">
                {selected.name}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-40">
              {solutions.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className="relative cursor-default select-none py-2 pl-10 pr-4 hover:bg-amber-100 hover:text-amber-900 text-gray-900"
                  value={person}
                >
                  <div className="flex items-center">
                    <div className="flex justify-start h-8 w-8 shrink-0 items-center text-white sm:h-8 sm:w-8">
                      <person.icon aria-hidden="true" />
                    </div>
                    <span className="flex justify-center w-full">
                      {person.name}
                    </span>
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

