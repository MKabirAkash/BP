import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoIcon } from "../SVG/SVGIcons";
const navigation_admin = [
  { name: "Dashboard", to: "/", icon: faHome, current: false },
  { name: "Course", to: "/coursedetail", icon: faHome, current: false },
];

export default function Menu({ user, userRole }) {
  return (
    <div className="flex flex-col gap-y-5 overflow-y-auto bg-menu_bg  min-h-screen border border-stroke">
      <div className="flex-shrink-0 ">
        <Link to="/">
          <div className="text-xl md:text-2xl px-6 pt-4 pb-2 max-w-[248px] max-h[72px] -ml-7">
            <img
              src="../../src/assets/logobp.png"
              className="w-full h-full"
            ></img>
          </div>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col ">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className=" space-y-1 ">
              {user &&
                userRole &&
                userRole == "systemadmin" &&
                navigation_admin.map((item) => (
                  <li key={item.name} className="">
                    <Link
                      to={item.to}
                      className="relative flex items-center  border-transparent py-2.5 px-12  text-base font-medium text-table_low duration-200  hover:border-primary hover:bg-gray-2 hover:text-primary "
                    >
                      {" "}
                      <div className="flex flex-row">
                        <span className="">
                          <FontAwesomeIcon
                            size="lg"
                            className=" w-7 h-5 size-2xl  dark:bg-gray__900 rounded-xl p-2"
                            icon={item.icon}
                          />
                        </span>
                        <span className="mt-1 min-w-max xl:text-lg 2xl:text-lg font-medium text-table_low hover:text-primary pl-3 font-roboto">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
