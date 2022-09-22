import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { classNames } from '../lib/classnames'

export function DropdownSelect({ options, onSelect, name }) {
    return (
        <Menu as="div" className="ml-3 relative hidden sm:block text-[16px]">
            <Menu.Button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-[#000000] px-[0.5em] py-0">
            <span className="flex flex-row items-center justify-between gap-2">
                {
                    options.length>0 && options.filter(obj => obj.active === true)[0].label
                }
                <Image src="/icons/select-down-arrow.svg" height={12} width={15} />
            </span>
            
            </Menu.Button>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-[1600]">
                {
                options.map((item, idx) => (
                    <Menu.Item key={idx}>
                        <button
                        onClick={() => {
                            console.log("Clicked")
                            onSelect(idx, name)
                        }}
                        className={classNames('hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 text-[16px]')}
                        target="_blank" rel="noreferrer"
                        >
                        {item.label}
                        </button>
                    </Menu.Item>
                ))
                }
            </Menu.Items>
            </Transition>
        </Menu>
                      
    )
}