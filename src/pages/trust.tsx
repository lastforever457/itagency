import { observer } from "mobx-react-lite";
import { Col, Divider, Image, Row } from "antd";
import trustCardBg from "../../public/trust-card-bg.png";

const Trust = observer(() => {
  return (
    <div className={"bg-[#000806] text-white"}>
      <div className="px-5 md:px-10 lg:px-20">
        <p className={"text-center text-3xl font-bold mb-4"}>
          {"CLOUD SOLUTIONS"}
        </p>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={18} lg={16} xl={16}>
            <p className={"text-2xl text-justify content-center mb-3"}>
              Начала свою деятельность в качестве IT-интегратора, установив
              партнерские отношения с такими компаниями, как «Green White
              Solutions» (ПО Smartup & Verifix-HR), зарубежной IT-компанией «Abm
              Cloud» и аутсорсинговой компанией «IT-Brick». Параллельно с этим
              располагав опытным и амбициозным отделом разработки.
            </p>
          </Col>
          <Col xs={24} sm={24} md={6} lg={8} xl={8}>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Image src="/sertificate.png" alt="" />
              <p className={"italic text-xl"}>IT park resident since 2022</p>
            </div>
          </Col>
        </Row>
        <Divider className={"bg-white"} />
        <Row gutter={[30, 30]} id={"trust-cards"}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div
              className="flex flex-col gap-3 min-h-[150px] bg-center bg-cover object-cover w-full rounded-3xl p-3"
              style={{ backgroundImage: `url(${trustCardBg})` }}
            >
              <div className="text-center">
                <p className={"text-xl"}>Успешных проектов</p>
              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center w-full h-full gap-2">
                  <p className={"text-5xl font-semibold"}>52+</p>
                  <span className={"flex justify-end"}>
                    <img
                      width={"70%"}
                      src="https://img.icons8.com/?size=100&id=53428&format=png&color=ffffff"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div
              className="flex flex-col gap-3 min-h-[150px] bg-center bg-cover object-cover w-full rounded-3xl p-3"
              style={{ backgroundImage: `url(${trustCardBg})` }}
            >
              <div className="text-center">
                <p className={"text-xl"}>Специалистом</p>
              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center w-full h-full gap-2">
                  <p className={"text-5xl font-semibold"}>25+</p>
                  <span className={"flex justify-end"}>
                    <img
                      width={"70%"}
                      src="https://img.icons8.com/?size=100&id=RtB2Iw4Wrg6G&format=png&color=ffffff"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div
              className="flex flex-col gap-3 min-h-[150px] bg-center bg-cover object-cover w-full rounded-3xl p-3"
              style={{ backgroundImage: `url(${trustCardBg})` }}
            >
              <div className="text-center">
                <p className={"text-xl"}>Страны</p>
              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center w-full h-full gap-2">
                  <p className={"text-5xl font-semibold"}>6</p>
                  <span className={"flex justify-end"}>
                    <img
                      width={"70%"}
                      src="https://img.icons8.com/?size=100&id=3685&format=png&color=ffffff"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div
              className="flex flex-col gap-3 min-h-[150px] bg-center bg-cover object-cover w-full rounded-3xl p-3"
              style={{ backgroundImage: `url(${trustCardBg})` }}
            >
              <div className="text-center">
                <p className={"text-xl"}>Опыт направлениях</p>
              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center w-full h-full gap-2">
                  <p className={"text-5xl font-semibold"}>10</p>
                  <span className={"flex justify-end"}>
                    <img
                      width={"70%"}
                      src="https://img.icons8.com/?size=100&id=25044&format=png&color=ffffff"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default Trust;
