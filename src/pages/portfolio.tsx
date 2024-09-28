import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    img: "/picture-14.jpg",
    title: "Avitsenna",
    description: "Решение и внедрение системы для Фарм.",
  },
  {
    img: "/picture-12.png",
    title: "Alicafe",
    description: "Дистрибуция и управление запасами",
  },
  {
    img: "/picture-11.jpg",
    title: "Sunlight Group",
    description: "Делаем удобные отчеты по продажам",
  },
  {
    img: "/picture-3.png",
    title: "Lovular",
    description: "IT и Бизнес консалтинг",
  },
  {
    img: "/picture-13.png",
    title: "Lovular",
    description: "IT и Бизнес консалтинг",
  },
  {
    img: "/picture-10.png",
    title: "Lovular",
    description: "IT и Бизнес консалтинг",
  },
  {
    img: "/picture-2.jpg",
    title: "Lovular",
    description: "IT и Бизнес консалтинг",
  },
  {
    img: "/picture-9.png",
    title: "Lovular",
    description: "IT и Бизнес консалтинг",
  },
  {
    img: "/lays.png",
    title: "Lovular",
    description: "IT и Бизнес консалтинг",
  },
];

function Portfolio() {
  return (
    <div
      id={"portfolio"}
      className="px-5 md:px-10 lg:px-20 bg-[#000806] flex items-center justify-between gap-48 pt-24 pb-20"
    >
      <Row>
        <Col xs={24} md={24} lg={12} xl={12}>
          <div data-aos="fade-right">
            <h1 className="text-4xl text-white font-bold mb-6">ПОРТФОЛИО</h1>
            <p className="text-white mb-6">
              Познакомьтесь с тем, как мы решаем проблемы бизнеса на реальных
              примерах.
            </p>
            <Link
              to={
                "https://cloud-solutions.uz/assets/slides/new-sloud-solutions-corporate-presentation.pdf"
              }
              target={"_blank"}
            >
              <button className="hover:text-black font-bold hover:bg-green-400 border border-white text-white px-5 py-2 rounded-full mb-10">
                Все проекты
              </button>
            </Link>
          </div>
        </Col>
        <Col xs={24} md={24} lg={12} xl={12} className={"w-full"}>
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
                    <Card.Meta
                      className={"p-0"}
                      title={item.title}
                      description={item.description}
                    />
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
