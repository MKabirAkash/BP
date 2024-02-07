import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DownIcon, LogOutIcon, LogoIcon, MembersIcon } from "../SVG/SVGIcons";

const navigation_systemAdmin = [
  { name: "Home", to: "/", icon: faHome, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ user, userRole }) {
  const dispatch = useDispatch();

  return (
    <Disclosure as="nav" className="bg-white border   border-stroke">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="flex-shrink-0 xl:hidden">
                  <Link to="/">
                    <div className="text-xl md:text-2xl px-6 pt-4 pb-2 max-w-[248px] max-h[72px] -ml-7">
                      <img
                        src="../../src/assets/logobp.png"
                        className="w-full h-full"
                      ></img>
                    </div>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 xl:block">
                  <div className="flex space-x-4"></div>
                </div>
              </div>
              <div className="hidden sm:ml-6 xl:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  {user && (
                    <div>
                      {" "}
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        alt=""
                      />
                    </div>
                  )}

                  {user && userRole && userRole === "systemadmin" && (
                    <>
                      <div className="flex flex-col">
                        <p className="mx-2 font-medium px-2 text-base  text-start rounded text-profile_name">
                          Bondi Pathshala
                        </p>
                        <p className=" text-start mx-2 font-medium px-2 text-sm rounded text-table_low">
                          System Admin
                        </p>
                      </div>
                    </>
                  )}

                  {user && (
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
                                        Staffs
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
              </div>

              <div className="-mr-2 flex xl:hidden">
                {/* Mobile menu button */}
                {user && (
                  <>
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />

                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden px-4 rounded fixed inset-y-0 left-0 z-50 w-full max-w-xs overflow-y-auto bg-white shadow-lg">
            <div className="border-t  w-full border-gray__200 pb-3 pt-4">
              <div>
                <Link to="/">
                  <h1 className="text-xl md:text-2xl text-primary ml-2 flex flex-row font-semibold">
                    <span className="my-auto">
                      <LogoIcon />
                    </span>{" "}
                    <span className="ml-2">Bondi Pathshala</span>
                  </h1>
                </Link>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {user &&
                    userRole &&
                    userRole === "systemadmin" &&
                    navigation_systemAdmin.map((item, index) => (
                      <Link
                        to={item.to}
                        key={index + Math.random()}
                        className="  hover:text-primary"
                      >
                        <Disclosure.Button className="block    font-normal font-roboto bg-white w-full md:w-1/2  py-3 pl-3 pr-11 text-gray__400   text-start">
                          <div className="flex flex-row text-table_low text-lg hover:text-primary ">
                            <span>
                              <FontAwesomeIcon
                                size="lg"
                                className=" w-7 h-5 size-2xl  text-table_low rounded-xl hover:text-primary "
                                icon={item.icon}
                              />
                            </span>

                            <span className="ml-4 min-w-max"> {item.name}</span>
                          </div>
                        </Disclosure.Button>
                      </Link>
                    ))}
                  {user && (
                    <div className=" mt-auto absolute bottom-[2%] -ml-2  ">
                      <div className="w-full grid grid-cols-6 ">
                        <div className="col-span-2 py-4">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                            className="rounded-full h-12 w-12"
                          />
                        </div>
                        <div className="col-span-4 py-4 my-auto ml-3 border-b border-table_low">
                          <p className="text-profile_name font-medium text-base">
                            BP Admin
                          </p>
                          <p className="text-table_low text-sm font-normal">
                            {user && userRole && userRole === "systemadmin"
                              ? "System Admin"
                              : "Not set"}
                          </p>
                        </div>
                      </div>

                      <Link to="/" className="">
                        <Disclosure.Button
                          onClick={() => {
                            console.log("logout clicked from nav");
                          }}
                          className="-ml-3 mt-2 block min-w-max text-table_low bg-inherit hover:text-primary hover:bg-white border-none rounded-md  font-bold  bg-white w-full md:w-1/2  py-2.5 px-3   text-start "
                        >
                          <span className="flex flex-row ">
                            <LogOutIcon />
                            <span className="ml-3 -mt-[3px] min-w-max">
                              Sign out
                            </span>
                          </span>
                        </Disclosure.Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
