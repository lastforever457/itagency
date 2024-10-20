import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useHeaderMenus = () => {
  const { t } = useTranslation();

  const navbarData = useMemo(
    () => [
      {
        title: t("home page"),
        path: "#",
      },
      {
        title: t("who we"),
        path: "about-us",
      },
      {
        title: t("portfolio"),
        path: "portfolio",
      },
      {
        title: t("our services"),
        path: "services",
      },
      {
        title: t("partnership"),
        path: "partnership",
      },
      {
        title: t("investors"),
        path: "investors",
      },
      {
        title: t("contacts"),
        path: "contacts",
      },
    ],
    [t],
  );

  return { navbarData };
};

export default useHeaderMenus;
