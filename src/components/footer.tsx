import { useCallback } from "react";
import { Col, Layout, Row } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import useHeaderMenus from "../hooks/use-header-menus.tsx";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const { Footer } = Layout;

const CustomFooter = () => {
  const { t } = useTranslation();
  const { navbarData } = useHeaderMenus();

  const scrollToSection = useCallback((e: any, id: string) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Footer className="bg-gray-900 text-gray-400 py-10">
      <div className="w-full px-5 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between">
        <Row gutter={[16, 35]} className={"w-full"}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            {/* Раздел "О компании" */}
            <div>
              <h3 className="text-white text-lg mb-4">Cloud Solutions</h3>
              <ul>
                <Row>
                  {navbarData.map((item) => (
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={12}
                      key={item.path}
                    >
                      <li className="mb-2">
                        <Link
                          onClick={(e) => {
                            scrollToSection(e, item.path);
                          }}
                          to={item.path}
                          className="hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </li>
                    </Col>
                  ))}
                </Row>
              </ul>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            {/* Раздел "Контакты" */}
            <div>
              <h3 className="text-white text-lg mb-4">{t("contacts")}</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="mailto:info@cloud-solutions.uz"
                    className="hover:text-white"
                  >
                    info@cloud-solutions.uz
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="tel:+998903517261" className="hover:text-white">
                    +998 (90) 351 72 61
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="hover:text-white">
                    ул. Катартал-2 дом-23, г. Ташкент
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            {/* Социальные сети */}
            <div>
              <h3 className="text-white text-lg mb-4">{t("follow")}</h3>
              <div className="flex space-x-4">
                <Link
                  to="https://telegram.me/Mirkamol_Kodirov"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTelegram className="text-xl" />
                </Link>
                <Link
                  to="https://www.facebook.com/cloudsolutionsuz/"
                  className="text-gray-400 hover:text-white"
                >
                  <FacebookFilled className="text-xl" />
                </Link>
                <Link
                  to="https://www.instagram.com/cloudsolutions.io/?igshid=MDE2OWE1N2Q%3D"
                  className="text-gray-400 hover:text-white"
                >
                  <InstagramFilled className="text-xl" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="text-center text-gray-500 mt-8">{t("footer")}</div>
    </Footer>
  );
};

export default CustomFooter;
