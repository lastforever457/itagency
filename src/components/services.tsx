import { FaBullhorn, FaCogs, FaDesktop } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io";
import { SiRadar } from "react-icons/si";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

function ServiceComponent() {
  const { t } = useTranslation();

  const services = useMemo(
    () => [
      {
        id: 1,
        title: t("create site"),
        description: t("create site desc"),
        icon: (
          <FaDesktop
            className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
          />
        ),
      },
      {
        id: 2,
        title: t("create mobile app"),
        description: t("create mobile app desc"),
        icon: (
          <FaBullhorn
            className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
          />
        ),
      },
      {
        id: 3,
        title: t("create CRM"),
        description: t("create CRM desc"),
        icon: (
          <FaDesktop
            className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
          />
        ),
      },
      {
        id: 4,
        title: t("sales"),
        description: t("sales desc"),
        icon: (
          <IoMdRainy
            className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
          />
        ),
      },
      {
        id: 5,
        title: "СММ",
        description: t("cmm desc"),
        icon: (
          <SiRadar
            className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
          />
        ),
      },
      {
        id: 6,
        title: t("technical services"),
        description: t("tech desc"),
        icon: (
          <FaCogs
            className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
          />
        ),
      },
    ],
    [t],
  );

  return (
    <section
      id={"services"}
      className="bg-black text-white py-12 px-5 md:px-10 lg:px-20"
    >
      <h2
        data-aos={"zoom-in"}
        className="text-4xl text-center font-bold mt-10 mb-8"
      >
        {t("service title")}
      </h2>
      <div className="gap-10">
        <Row gutter={[25, 55]}>
          {services.map((service) => (
            <Col key={service.id} xs={24} sm={24} md={8} lg={8}>
              <div data-aos={"zoom-in"} key={service.id} className="flex gap-2">
                <div className="flex gap-1">
                  <span className={"text-amber-400 font-bold text-2xl"}>
                    {service.id}
                  </span>
                  <hr className="w-10 h-0.5 mt-4 mb-5 bg-amber-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <span>{service.icon}</span>
                  <h3 className="text-xl font-semibold text-amber-400 ">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-amber-400">{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ServiceComponent;
