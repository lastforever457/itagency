import { Col, Row } from "antd";
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
      id="portfolio"
      className="py-8 mx-auto md:px-10 lg:px-20 bg-[#000806] flex items-center justify-between gap-48 pt-24 pb-20"
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
        <Col xs={24} md={24} lg={12} xl={12}>
          <Row gutter={[32, 32]} data-aos="zoom-in">
            {portfolioItems.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={8} lg={8}>
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[300px] h-[200px] object-cover bg-contain bg-center rounded-lg hover:scale-105"
                  />
                  <div className="w-full absolute bottom-0 left-0 px-3 bg-black bg-opacity-50 flex flex-col gap-2 min-h-[30px] max-h-[100px] text-[12px]">
                    <h3 className="text-white text-[12px] mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
