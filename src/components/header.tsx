import { observer } from "mobx-react-lite";
import { useCallback, useMemo, useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button, Drawer, Segmented } from "antd";
import { DownOutlined } from "@ant-design/icons";
import useHeaderMenus from "../hooks/use-header-menus.tsx";
import { useTranslation } from "react-i18next";

const MainHeader = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { navbarData } = useHeaderMenus();

  const { i18n } = useTranslation();

  const handleMenuClick = (e: any) => {
    const selectedLanguage = e;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  const menu = (
    <Menu onClick={(e) => handleMenuClick(e.key)}>
      <Menu.Item key="ru">Русский</Menu.Item>
      <Menu.Item key="en">English</Menu.Item>
    </Menu>
  );

  const scrollToSection = useCallback((e: any, id: string) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }, []);

  const menuItems = useMemo(
    () =>
      navbarData.map((item) => {
        return {
          key: item.path,
          label: (
            <Link
              to={item.path}
              onClick={(e) => {
                scrollToSection(e, item.path);
                setIsOpen(false);
              }}
            >
              {item.title}
            </Link>
          ),
        };
      }),
    [navbarData, scrollToSection],
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
            style={{ filter: "drop-shadow(5px 5px 30px cyan)" }}
            src="/images/vector-icon.svg"
            width={30}
            alt=""
          />
          <h3 className="text-md font-bold sm:text-xl flex gap-2">
            Cloud Solutions{" "}
            <span className={"hidden md:flex lg:hidden"}>IT Company</span>
          </h3>
        </div>

        <div className={"flex items-center gap-4 lg:hidden"}>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer
            title={
              <div className={"w-full flex items-center gap-2"}>
                <img src="/images/vector-icon.svg" width={30} alt="" />
                <h3 className="text-md font-bold sm:text-xl flex gap-2">
                  Cloud Solutions{" "}
                  <span className={"hidden md:flex"}>IT Academy</span>
                </h3>
              </div>
            }
            placement={"top"}
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <div className={"flex gap-2"}>
              <Segmented
                defaultValue={i18n.language}
                options={[
                  { label: "Русский", value: "ru" },
                  { label: "English", value: "en" },
                ]}
                onChange={(value: string) => handleMenuClick(value)}
              />
            </div>
            <Menu
              className={"bg-transparent w-full"}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={menuItems}
            />
          </Drawer>
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

        <div className={"hidden lg:flex items-center md:gap-5"}>
          {navbarData.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => scrollToSection(e, item.path)}
            >
              <h3
                className={`text-base md:text-md font-medium cursor-pointer hover:text-green-600 transition-all duration-300`}
              >
                {item.title}
              </h3>
            </Link>
          ))}
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button
              style={{ background: "transparent" }}
              className="flex items-center px-2 py-0 bg-transparent text-white rounded hover:bg-blue-600"
            >
              {i18n.language === "en" ? "ENG" : "РУС"}
              <DownOutlined className="" />
            </Button>
          </Dropdown>
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
