import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useLocation } from "react-router-dom";

const Header = ({ isActive }) => {
  const location = useLocation();

  return (
    <header className="flex flex-col space-y-4 mb-10">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src={reactLogo} alt="" />
          {/* nav */}
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  className={`text-sm tracking-tight font-normal hover:text-slate-500 ${
                    location.pathname === "/"
                      ? "text-muted-foreground"
                      : "text-slate-900"
                  }`}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`text-sm tracking-tight font-normal hover:text-slate-500 ${
                    location.pathname === "/notes"
                      ? "text-muted-foreground"
                      : "text-slate-900"
                  }`}
                  to={"/notes"}
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  className={`text-sm tracking-tight font-normal hover:text-slate-500 ${
                    location.pathname === "/user"
                      ? "text-muted-foreground"
                      : "text-slate-900"
                  }`}
                  to={"/user"}
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  className={`text-sm tracking-tight font-normal hover:text-slate-500 ${
                    location.pathname === "/blog"
                      ? "text-muted-foreground"
                      : "text-slate-900"
                  }`}
                  to={"/blog"}
                >
                  blogs
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* auth */}
        <div className="flex space-x-2">
          <Button size="sm">Sign In</Button>
          <Button size="sm" variant="outline">
            Sign Up
          </Button>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
