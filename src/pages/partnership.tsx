import { observer } from "mobx-react-lite";
import { Col, Divider, Row, Typography } from "antd";
import { useMemo } from "react";
import PartnershipBlock from "../components/partnership-block.tsx";

const Partnership = observer(() => {
  const programs: { title: string; description: string }[] = useMemo(
    () => [
      {
        title: "Реферальная программа",
        description:
          "Наша реферальная программа предоставляет вам возможность зарабатывать, рекомендуя наши услуги и решения. Приглашайте коллег, друзей или бизнес-партнеров воспользоваться нашими ИТ-услугами и получайте бонус за каждого нового клиента. Мы ценим ваше доверие и готовы вознаграждать вас за вклад в развитие нашего бизнеса.",
      },
      {
        title: "Агентское вознаграждение",
        description:
          "Станьте нашим агентом и получите вознаграждение за успешное привлечение новых клиентов. Вы рекомендуете наши услуги, а мы обеспечиваем вам процент от каждой заключённой сделки. Это выгодное сотрудничество, которое позволит вам увеличить доход, расширяя нашу клиентскую базу.",
      },
      {
        title: "Партнерство/Дистрибьюция",
        description:
          "Мы приглашаем к сотрудничеству компании и частных предпринимателей, готовых стать нашими партнёрами или дистрибьюторами. Мы предлагаем выгодные условия для партнёрства, поддержку на каждом этапе и уникальные продукты, которые помогут вам расширить ваш бизнес. С нами вы получите надёжного партнёра и дополнительные возможности для роста.",
      },
    ],
    [],
  );

  return (
    <div
      id={"partnership"}
      className={"px-5 md:px-10 lg:px-20 bg-[#000806] text-white py-10"}
    >
      <Typography.Title level={1} className={"text-center mb-7"}>
        Партнёрство
      </Typography.Title>
      <img
        className={"h-[370px] w-full object-cover bg-cover bg-center"}
        src={"/partnership.png"}
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
