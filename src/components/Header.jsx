import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useLocation } from "react-router-dom";
import { ShoppingBagIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context";

const Header = () => {
  const cart = useContext(GlobalContext);
  const [count, setCount] = useState(cart.count);

  useEffect(() => {
    console.log(cart.count);
    setCount(cart.count);
  }, [cart.count]);

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
                    location.pathname === "/users"
                      ? "text-muted-foreground"
                      : "text-slate-900"
                  }`}
                  to={"/users"}
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
              <li>
                <Link
                  className={`text-sm tracking-tight font-normal hover:text-slate-500 ${
                    location.pathname === "/life"
                      ? "text-muted-foreground"
                      : "text-slate-900"
                  }`}
                  to={"/life"}
                >
                  lifecycle
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* auth */}
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <div className="relative">
              <ShoppingBagIcon className="w-6 h-6 relative" />
              <span className="absolute right-0 -top-0 bg-red-400 text-white text-[12px] rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            </div>
          </Button>
          <div className="flex items-center space-x-2">
            <Button size="sm">Sign In</Button>
            <Button size="sm" variant="outline">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
