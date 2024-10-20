import { observer } from "mobx-react-lite";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const WhoWe = observer(() => {
  const { t } = useTranslation();

  return (
    <div id={"about-us"} className="py-5 bg-[#000806] pb-32 w-[100%]">
      <div className="px-5 md:px-10 lg:px-20">
        <h1 className="text-white font-semibold text-3xl md:text-6xl pb-10 mt-3 mb-2 text-center">
          {t("IT Company")}
        </h1>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Business-Setup-Consultant-in-Dubai-_-Cover-21-2-23.jpg"
              alt=""
              className="rounded-xl h-[400px] object-cover bg-center bg-cover"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={"text-justify"}>
              <span className={"text-white text-[26px]"}>
                {t("about title")}
              </span>
              <br />
              <br />
              <span className={"text-white text-[20px] text-justify"}>
                — {t("about 1")}
                <br />— {t("about 2")}
                <br />— {t("about 3")}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default WhoWe;
