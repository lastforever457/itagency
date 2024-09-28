import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";

const MainHeader = observer(() => {
  // const [menuOpen, setMenuOpen] = useState(false);
  //
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const scrollToSection = (e: any, id: string) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const navbarData = useMemo(
    () => [
      {
        title: "Главное меню",
        path: "#",
      },
      {
        title: "Кто мы",
        path: "about-us",
      },
      {
        title: "Нам доверяют",
        path: "trust",
      },
      {
        title: "Портфолио",
        path: "portfolio",
      },
      {
        title: "Наши услуги",
        path: "services",
      },
      {
        title: "Контакты",
        path: "contacts",
      },
    ],
    [],
  );

  const dropdownItems = useMemo(
    () =>
      navbarData.map((item) => ({
        key: item.title,
        label: (
          <Link
            to={`#${item.path}`}
            onClick={(e) => scrollToSection(e, item.path)}
            className={`text-white hover:text-gray-300`}
          >
            {item.title}
          </Link>
        ),
      })),
    [navbarData],
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
          <img
            style={{ filter: "drop-shadow(5px 5px 20px cyan)" }}
            src="/vector-icon.svg"
            width={30}
            alt=""
          />
          <h3 className="text-md font-bold sm:text-xl flex gap-2">
            Cloud Solutions <span className={"hidden md:flex"}>IT Academy</span>
          </h3>
        </div>

        <div className={"flex items-center gap-4 md:hidden"}>
          <Dropdown menu={{ items: dropdownItems }}>
            <FaBars className="text-2xl cursor-pointer" />
          </Dropdown>
          {/*{menuOpen ? (*/}
          {/*  <MdClose className="text-2xl cursor-pointer" onClick={toggleMenu} />*/}
          {/*) : (*/}
          {/*  <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />*/}
          {/*)}*/}
          <Link to={"tel:+998903517261"}>
            <AiFillPhone
              className="text-2xl cursor-pointer text-green-500"
              style={{ filter: "drop-shadow(2px 2px 20px cyan)" }}
            />
          </Link>
        </div>

        <div className={"hidden md:flex items-center md:gap-5"}>
          {navbarData.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => scrollToSection(e, item.path)}
            >
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

      {/*{menuOpen && (*/}
      {/*  <div className="md:hidden bg-black text-white w-[100%] h-screen text-center px-4 py-4 space-y-6 flex flex-col items-center justify-center">*/}
      {/*    <div className="flex flex-col items-center justify-center gap-5">*/}
      {/*      {navbarData.map((item) => (*/}
      {/*        <Link key={item.path} to={item.path}>*/}
      {/*          <h3*/}
      {/*            className={*/}
      {/*              "hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"*/}
      {/*            }*/}
      {/*            onClick={closeMenu}*/}
      {/*          >*/}
      {/*            <span className="text-3xl relative hover:border-2-yellow-400 font-bold">*/}
      {/*              {item.title}*/}
      {/*            </span>*/}
      {/*          </h3>*/}
      {/*        </Link>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <h2 className={"text-4xl text-center text-amber-400 font-bold pt-40"}>*/}
      {/*      Мы заботимся о ваших ИТ-целях!*/}
      {/*    </h2>*/}
      {/*  </div>*/}
      {/*)}*/}
    </header>
  );
});

export default MainHeader;
