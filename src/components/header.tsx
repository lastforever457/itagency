import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const MainHeader = observer(() => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarData = useMemo(
    () => [
      {
        title: "Главное меню",
        path: "/",
      },
      {
        title: "Кто мы",
        path: "/academy-interested",
      },
      {
        title: "Нам доверяют",
        path: "/trust",
      },
      {
        title: "Портфолио",
        path: "/portfolio",
      },
      {
        title: "Наши услуги",
        path: "/services",
      },
      {
        title: "Контакты",
        path: "/contacts",
      },
    ],
    [],
  );

  return (
    <header
      style={{
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(15px)",
      }}
      className={`w-[100%] text-white fixed top-0 z-50 transition-all duration-300`}
    >
      <div
        className={`px-5 md:px-10 lg:px-20 flex items-center justify-between py-7`}
      >
        <div className={"flex items-center gap-2"}>
          <h3 className="text-lg font-bold sm:text-xl">
            Cloud Solutions It Academy
          </h3>
        </div>

        <div className={"flex items-center gap-4 md:hidden"}>
          {menuOpen ? (
            <MdClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
          <Link to={"tel:+998903517261"}>
            <AiFillPhone
              className="text-2xl cursor-pointer text-green-500"
              style={{ filter: "drop-shadow(2px 2px 20px cyan)" }}
            />
          </Link>
        </div>

        <div className={"hidden md:flex items-center md:gap-5"}>
          {navbarData.map((item) => (
            <Link key={item.path} to={item.path}>
              <h3
                className={`text-sm sm:text-base font-medium cursor-pointer hover:text-green-600 transition-all duration-300`}
              >
                {item.title}
              </h3>
            </Link>
          ))}
          <div className={"bg-green-600 py-1 px-1 rounded-xl cursor-pointer"}>
            <Link to={"tel:+998903517261"}>
              <AiFillPhone />
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white w-[100%] h-screen text-center px-4 py-4 space-y-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-5">
            {navbarData.map((item) => (
              <Link key={item.path} to={item.path}>
                <h3
                  className={
                    "hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                  }
                  onClick={closeMenu}
                >
                  <span className="text-3xl relative hover:border-2-yellow-400 font-bold">
                    {item.title}
                  </span>
                </h3>
              </Link>
            ))}
          </div>
          <h2 className={"text-4xl text-center text-amber-400 font-bold pt-40"}>
            Мы заботимся о ваших ИТ-целях!
          </h2>
        </div>
      )}
    </header>
  );
});

export default MainHeader;
