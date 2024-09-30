import { observer } from "mobx-react-lite";
import { Col, Row } from "antd";

const WhoWe = observer(() => {
  return (
    <div id={"about-us"} className="py-5 bg-[#000806] pb-32 w-full">
      <div className="px-5 md:px-10 lg:px-20">
        <h1 className="text-white font-semibold text-3xl md:text-7xl pb-10 mt-3 mb-2 text-center">
          IT Company
        </h1>
        <Row gutter={[30, 30]}>
          <Col data-aos="fade-right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Business-Setup-Consultant-in-Dubai-_-Cover-21-2-23.jpg"
              alt=""
              className="rounded-xl h-[400px] object-cover bg-center bg-cover"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div data-aos="fade-left">
              <span className={"text-white text-[26px]"}>
                «Cloud-Solutions» LLC - Индивидуальные программные решения для
                Вашего бизнеса Надежный партнер в цепочке поставок ИТ-услуг
              </span>
              <br />
              <br />
              <span className={"text-white text-[20px] text-justify"}>
                — Освободите свой бизнес от IT-зависимости! Ваш уникальный
                продукт — без абонентских оплат и долгих ожиданий.
                <br />
                *Ваш продукт, ваши правила. Никаких абонентских плат и
                длительных доработок!
                <br />
                *С нами ваш продукт всегда под вашим контролем. Мы
                разрабатываем, внедряем и предлагаем лучшие решения!
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default WhoWe;
