import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import { navigation_admin } from "../../assets/roleBaseRouteOption";

export default function Menu({ user, userRole }) {
  return (
    <div className="w-full flex flex-col gap-y-5 overflow-y-auto bg-menu_bg  min-h-screen border border-stroke font-sans">
      <div className="w-full flex justify-center px-6 2xl:px-4 mt-2 mb-2 border-b border-gray__600">
        <Link to="/">
          <div className=" max-w-[248px] max-h[72px] py-4">
            <img
              src="../../src/assets/logobp.png"
              className="w-full h-full"
            ></img>
          </div>
        </Link>
      </div>
      <nav className="flex flex-col ">
        <ul role="list" className="flex  flex-col gap-y-6">
          <ul role="list" className=" space-y-3 ">
            {user &&
              userRole &&
              userRole == "systemadmin" &&
              navigation_admin.map((item, index) => (
                <li className="px-4" key={index}>
                  <MenuItem item={item} />
                </li>
              ))}
          </ul>
        </ul>
      </nav>
    </div>
  );
}
