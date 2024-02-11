import { faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownIcon, LogOutIcon, LogoIcon, MembersIcon } from "../SVG/SVGIcons";
import MenuItem from "./MenuItem";

import { navigation_admin } from "../../assets/roleBaseRouteOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ user, userRole }) {
  const dispatch = useDispatch();

  return (
    <Disclosure as="nav" className="bg-white border   border-stroke">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8 font-sans">
            <div className="flex h-[102px] items-center justify-between ">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="flex-shrink-0 xl:hidden">
                  <Link to="/">
                    <div className="text-xl md:text-2xl px-6 pt-4 pb-2 max-w-[248px] max-h[72px] -ml-7">
                      <img
                        src="../../src/assets/logoWhite.png"
                        className="w-full h-full"
                      ></img>
                    </div>
                  </Link>
                </div>
                <div className="hidden text-base text-text_clr xl:block font-medium">
                  Hello <span className="text-web_clr">Tonmoy Vaiya</span> Good
                  Night
                </div>
              </div>

              <div className="-mr-3 flex flex-row ">
                {/* <<div className=" sm:ml-4 -mr-1">
                 div className="flex items-center mt-0.5">
                    {user && (
                      <div>
                        {" "}
                        <img
                          className="h-11 w-11 rounded-full"
                          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                          alt=""
                        />
                      </div>
                    )} */}

                {/* {user && (
                      <Menu as="div" className="relative ml-1">
                        <div>
                          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>

                            <span>
                              <DownIcon colour="#242F57" />
                            </span>
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
                          <Menu.Items className="absolute -left-40 z-10 mt-5 max-h-48  w-48 origin-top-right rounded-md bg-white py-2 px-2  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {user && userRole && userRole === "systemadmin" && (
                              <Menu.Item>
                                {({ active }) => (
                                  <Link to={`/staffs`}>
                                    <button
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-profile_name font-medium hover:text-blue-800"
                                      )}
                                    >
                                      <span className="flex flex-row">
                                        <MembersIcon />
                                        <span className="ml-2 mt-[1px]">
                                          Profile
                                        </span>
                                      </span>
                                    </button>
                                  </Link>
                                )}
                              </Menu.Item>
                            )}

                            <Menu.Item>
                              {({ active }) => (
                                <Link to="/">
                                  <button
                                    onClick={() => {
                                      console.log("clicked logout");
                                    }}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700 hover:text-danger"
                                    )}
                                  >
                                    <span className="flex flex-row">
                                      <LogOutIcon />
                                      <span className="ml-2 mt-[1px]">
                                        Sign Out
                                      </span>
                                    </span>
                                  </button>
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )} 
                  </div>
                </div>*/}
                {/* Mobile menu button */}
                {user && (
                  <>
                    <Disclosure.Button className="relative inline-flex xl:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />

                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <FontAwesomeIcon
                          icon={faClose}
                          className="h-8 w-8 text-blue-700 bg-white border-none"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faNavicon} className="h-8 w-8" />
                      )}
                    </Disclosure.Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden px-4 rounded fixed inset-y-0 left-0 z-50 w-full max-w-xs overflow-y-auto bg-menu_bg shadow-lg font-sans">
            <div className="border-t  w-full border-gray__200 pb-3 pt-4">
              <div className="w-full flex justify-center px-6 2xl:px-4 mt-2 mb-2 border-b border-gray__600">
                <Link to="/">
                  <div className="text-xl md:text-2xl px-6 pt-4 pb-2 max-w-[248px] max-h[72px] -ml-7">
                    <img
                      src="../../src/assets/logobp.png"
                      className="w-full h-full"
                    ></img>
                  </div>
                </Link>
              </div>
              <div className="mt-3 space-y-2 px-2">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {user &&
                    userRole &&
                    userRole === "systemadmin" &&
                    navigation_admin.map((item, index) => (
                      <MenuItem item={item} key={index} />
                    ))}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
