import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface DropdownProps {
    text: string;
    items: string[];
    color: string;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ text, items, color }: DropdownProps) {
    const menuItems = items.map((item) => {
        return (
            <>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                                active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                "block px-4 py-2 text-sm"
                            )}
                        >
                            {item}
                        </a>
                    )}
                </Menu.Item>
            </>
        );
    });

    return (
        <Menu as="div" className="relative inline-block text-left mx-1 md:mx-3">
            <div>
                <Menu.Button
                    className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-1 md:px-3 py-2 text-sm font-semibold text-${color}-600 shadow-sm border-2 border-solid border-${color}-600 hover:text-${color}-700`}
                >
                    {text}
                    <ChevronDownIcon
                        className={`mr-1 h-5 w-5 text-${color}-600`}
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">{menuItems}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
