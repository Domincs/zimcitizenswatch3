import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from "next/router";
import Link from 'next/link';

export function NavbarContainer() {
  const { asPath } = useRouter();
  console.log(asPath)

const navigation = [
  { name: 'Reports', href: '#', type: 'link', active: true },
  { name: 'Select Country', href: '#', type: 'dropdown', option: [
    {country: "Malawi", link: "/malawi", active: asPath.includes("/malawi"), flag: '/flags/mw.svg'},
    {country: "Zambia", link: "/zambia", active: asPath.includes("/zambia"), flag: '/flags/zm.svg'},
    {country: "Zimbabwe", link: "https://zimcitizenswatch.org", active: false, flag: '/flags/zw.svg'}
  ] }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
    return(
    <Disclosure as="nav" className="bg-gray-800 relative z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <span>Menu</span>
                  ) : (
                    <span>Menu</span>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex flex-col leading-none">
                  <Link href='/'>
                    <h4 className="text-2xl font-semibold">
                      CitizensWatch
                    </h4>
                  </Link>
                  <span>{asPath.includes('/zambia') ? 'Zambia': (asPath.includes('/malawi') ? 'Malawi': <></>)}</span>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
                {
                  navigation.map((item, idx) => {
                    if(item.type === 'link') {
                      return (
                        <a className='flex flex-col' key={idx} href={item.href} >
                          <span className="px-2">{item.name}</span>
                          {
                            item.active && <span className="h-[6px] w-full border-radius bg-orange"/>
                          }
                          
                        </a>
                      
                      )
                    }
                    else if(item.type === 'dropdown') {
                      return (
                        <Menu as="div" className="ml-3 relative">
                          <Menu.Button className="flex rounded-full border focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-[#000000] px-[0.5em] py-0">
                            <span className="flex flex-row items-center justify-between gap-10">
                              <span>
                                {
                                  item.option.find((obj) => obj.active === true) === undefined ?
                                  item.name
                                  :
                                  item.option.find((obj) => obj.active === true).country
                                }
                              </span>
                              {
                                item.option.find((obj) => obj.active === true) === undefined ?
                                <img src="/icons/dropdown.svg" className="h-[9px]" />
                                :
                                <img src={item.option.find((obj) => obj.active === true).flag} className="h-5 rounded shadow-2xl" />

                              }
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
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {
                                item.option.map((menuItem, itemId) => (
                                  <Menu.Item key={itemId}>
                                    {({ active }) => (
                                      <a
                                        href={menuItem.link}
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        target={ menuItem.link.includes("https://zimcitizenswatch") ? "__blank": "__self" }
                                      >
                                        {menuItem.country}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))
                              }
                            </Menu.Items>
                          </Transition>
                        
                        </Menu>
                      
                      )
                    }
                    return (<></>)
                  })
                }

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      
      )}
    </Disclosure>
    )
}