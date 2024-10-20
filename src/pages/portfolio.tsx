import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

function Portfolio() {
  const { t } = useTranslation();

  const portfolioItems = useMemo(
    () => [
      {
        img: "/images/picture-14.jpg",
        title: "Tip Top",
      },
      {
        img: "/images/picture-12.png",
        title: "ROZMETOV",
      },
      {
        img: "/images/picture-11.jpg",
        title: "Perla",
      },
      {
        img: "/images/picture-3.png",
        title: "NT Holding",
      },
      {
        img: "/images/picture-13.png",
        title: "Serene Pharma",
      },
      {
        img: "/images/picture-10.png",
        title: "Active",
      },
      {
        img: "/images/picture-2.jpg",
        title: "Doraline & Plan Baby",
      },
      {
        img: "/images/picture-9.png",
        title: "OXY Med",
      },
      {
        img: "/images/lays.png",
        title: "Lay's",
      },
    ],
    [],
  );

  return (
    <div
      id={"portfolio"}
      className="px-5 md:px-10 lg:px-20 bg-[#000806] flex items-center justify-between gap-48 pt-24 pb-20"
    >
      <Row>
        <Col xs={24} md={24} lg={8} xl={8}>
          <div data-aos="fade-up">
            <h1 className="text-4xl text-white font-bold mb-6">
              {t("portfolio").toUpperCase()}
            </h1>
            <p className="text-white mb-6">{t("portfolio desc")}</p>
            <Link
              to={
                "https://cloud-solutions.uz/assets/slides/new-sloud-solutions-corporate-presentation.pdf"
              }
              target={"_blank"}
            >
              <button className="hover: transition-all hover:border-transparent font-bold hover:bg-green-400 border border-white text-white px-5 py-2 rounded-full mb-10">
                {t("all projects")}
              </button>
            </Link>
          </div>
        </Col>
        <Col xs={24} md={24} lg={16} xl={16} className={"w-full"}>
          <div className="w-full flex justify-center items-center">
            <Row gutter={[16, 16]} data-aos="zoom-in" className={"w-full"}>
              {portfolioItems.map((item, index) => (
                <Col
                  key={index}
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  className={"w-full"}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        className={"md:min-h-[300px] bg-contain bg-center"}
                        style={{
                          objectFit: "contain",
                          backgroundSize: "cover",
                        }}
                        src={item.img}
                        alt={item.title}
                      />
                    }
                  >
                    <Card.Meta className={"p-0"} title={item.title} />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
