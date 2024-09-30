import { useMemo } from "react";

const useHeaderMenus = () => {
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

  return { navbarData };
};

export default useHeaderMenus;
