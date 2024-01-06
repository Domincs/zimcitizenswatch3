import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

export function NavbarContainer() {

  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;
      console.log("Position:", scrollPosition)
      console.log("Threshold:", scrollThreshold)

      setShowShadow(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navigation = [
    { name: 'CitizensWatch Home', href: '/', type: 'link', active: true, disabled: true },
    { name: 'Methodology', href: '/methodology', type: 'link', active: false, disabled: false },
    { name: 'Submit Policy Action', href: 'https://forms.office.com/r/yn0wMdFJPt', type: 'link', active: false },
    { name: 'Reports', href: '/reports', type: 'link', active: false, disabled: false },
    // { name: 'Key Documents', href: '#', type: 'select', option: [
    //   {label: 'Manifesto', link: '/documents/malawi/MCP Manifesto_Abridged Version_2019-2024.pdf'}
    // ]},
    { name: 'Select Country', href: '#', type: 'dropdown', option: [
      {country: "Malawi", link: "https://africancitizenswatch.org/zambia", active: false, flag: '/flags/mw.svg'},
      {country: "Zambia", link: "https://africancitizenswatch.org/zambia", active: false, flag: '/flags/zm.svg'}
      ]
    }
  ]

  const menuClasses = classNames(
    'fixed',
    'top-0',
    'bg-white',
    'w-full',
    'z-50',
    'bg-white',
    'transition-shadow',
    'duration-300',
    'text-[16px]',
    'pt-3',
    {
      'shadow-md': showShadow,
    }
  );

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ')
  // }
    return(
    <Disclosure as="nav" className={menuClasses}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <span>
                      <Image src="/icons/close.svg" height={26} width={21} alt="close" />
                    </span>
                  ) : (
                    <span><Image src="/icons/menu.svg" height={26} width={21} alt='open' /></span>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex flex-row gap-2 md:gap-6 items-center hidden md:flex">
                    <Link target="_blank" href="https://www.sivioinstitute.org">
                      <Image src="/icons/logo.svg" height={42} width={93} alt="SIVIO" />
                    </Link>
                    <span className="h-full w-[1px] bg-black"/>
                    <span className="flex flex-col leading-none py-1">
                      <Link href="/">
                        <h4 className="font-semibold leading-none cursor-pointer">
                          CitizensWatch
                        </h4>
                      </Link>
                      
                      <span className="text-[20px] leading-none">Zimbabwe</span>
                    </span>
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
                {
                  navigation.map((item, idx) => {
                    if(item.type === 'link') {
                      return (
                        <Link key={idx} href={item.href} passHref={item.href.includes("https://")} >
                          <a rel="noreferrer" className='group hidden md:flex md:flex-col' href={item.href} target={ item.href.includes("https://") ? "_blank": "_self" } {...(item.href.includes("https://") && { rel: "noreferrer" })}>
                            <span className="px-2">{item.name}</span>
                            <span className="h-[6px] w-full transition ease-in-out duration-300 delay-150 border-radius group-hover:bg-orange"/>
                          </a>
                        </Link>
                      )
                    }
                    else if(item.type === 'dropdown') {
                      return (
                        <Menu as="div" className="ml-3 relative mt-[-0.45em]" key={idx}>
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
                                <img src="/icons/dropdown.svg" className="h-[9px]" alt='v' />
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
                                      <Link
                                        href={menuItem.link}
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        target={ menuItem.link.includes("https://zimcitizenswatch") ? "_blank": "_self" } {...(menuItem.link.includes("https://zimcitizenswatch") && { rel: "noreferrer" })} 
                                      >
                                        {menuItem.country}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))
                              }
                            </Menu.Items>
                          </Transition>
                        
                        </Menu>
                      
                      )
                    }

                    else if(item.type === 'select') {
                      return (
                        <Menu as="div" className="ml-3 relative hidden sm:block mt-[-0.45em]" key={idx}>
                          <Menu.Button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-[#000000] px-[0.5em] py-0">
                            <span className="flex flex-row items-center justify-between gap-2">
                              {item.name}
                              <Image src="/icons/select-down-arrow.svg" height={12} width={15} alt="v" />
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
                                        target="_blank" rel="noreferrer"
                                      >
                                        {menuItem.label}
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

                  })
                }

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden transition ease-in-out duration-300 delay-300 absolute box-shadow origin-top-left left-0 w-full shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                if(item.type === 'link'){
                  return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    target={ item.href.includes("https://") ? "_blank": "_self" }
                    {...(item.href.includes("https://") && { rel: "noreferrer" })}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>)

                }
                else if(item.type === 'select') {
                  return (
                    <Menu as="div" className="ml-3 relative" key={item.name}>
                      <Menu.Button className="flex rounded-full border focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border-[#000000] px-[0.5em] py-0">
                        <span className="flex flex-row items-center justify-between gap-10">
                          {item.name}
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
                        <Menu.Items className="origin-top-left absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {
                            item.option.map((menuItem, itemId) => (
                              <Menu.Item key={itemId}>
                                {({ active }) => (
                                  <a
                                    href={menuItem.link}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    target="_blank" rel="noreferrer"
                                  >
                                    {menuItem.label}
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
              })}
            </div>
          </Disclosure.Panel>
        </>
      
      )}
    </Disclosure>
    )
}