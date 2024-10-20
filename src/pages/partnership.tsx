import { observer } from "mobx-react-lite";
import { Col, Divider, Row, Typography } from "antd";
import { useMemo } from "react";
import PartnershipBlock from "../components/partnership-block.tsx";
import { useTranslation } from "react-i18next";

const Partnership = observer(() => {
  const { t } = useTranslation();

  const programs: { title: string; description: string }[] = useMemo(
    () => [
      {
        title: t("referral program"),
        description: t("referral desc"),
      },
      {
        title: t("agency"),
        description: t("agency desc"),
      },
      {
        title: t("partnership/distribution"),
        description: t("partnership desc"),
      },
    ],
    [t],
  );

  return (
    <div
      id={"partnership"}
      className={"px-5 md:px-10 lg:px-20 bg-[#000806] text-white py-10"}
    >
      <Typography.Title level={1} className={"text-center mb-7"}>
        {t("partnership").toUpperCase()}
      </Typography.Title>
      <img
        className={"h-[370px] w-full object-cover bg-cover bg-center"}
        src={"/images/partnership.png"}
        alt={"partnership"}
      />
      <div className="mt-5">
        <Row gutter={24}>
          {programs.map(
            (
              program: { title: string; description: string },
              index: number,
            ) => (
              <Col xs={24} sm={24} md={8} lg={8} xl={8} key={index}>
                <PartnershipBlock {...program} />
              </Col>
            ),
          )}
        </Row>
      </div>
      <Divider />
    </div>
  );
});

export default Partnership;
