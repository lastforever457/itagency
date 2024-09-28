import { FaBullhorn, FaCogs, FaDesktop } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io";
import { SiRadar } from "react-icons/si";
import { Col, Row } from "antd";

interface ServiceProps {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

function ServiceComponent() {
  const services: ServiceProps[] = [
    {
      id: 1,
      title: "Создать сайт",
      description:
        "Мы создаем сайт любой необходимой вам сложности, используя лучшие языки программирования сайтов, и помогаем быстро реализовать ваш идеал.",
      icon: (
        <FaDesktop
          className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
        />
      ),
    },
    {
      id: 2,
      title: "Создать мобильное приложение",
      description:
        "Мы создаем мобильные приложения вашего сайта быстро и качественно, используя инновационные технологии для реализации идей наших клиентов.",
      icon: (
        <FaBullhorn
          className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
        />
      ),
    },
    {
      id: 3,
      title: "Создание CRM-системы",
      description:
        "Создание системы, которая используется для дальнейшего развития взаимоотношений между сотрудниками компании и клиентами.",
      icon: (
        <FaDesktop
          className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
        />
      ),
    },
    {
      id: 4,
      title: "Oтдел продаж",
      description:
        "Хотите вывести свой онлайн-бизнес на более брендовый уровень? Как насчет привлечения большего количества клиентов? Тогда мы предлагаем вам нашу идеальную и привлекательную услугу по рисованию дизайна.",
      icon: (
        <IoMdRainy
          className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
        />
      ),
    },
    {
      id: 5,
      title: "СММ",
      description:
        "Это улучшение коммуникации с пользователями Интернета, представление бренда продукта и привлечение большего количества потенциальных клиентов в интернет-магазин или другой вид бизнеса за счет качественного контента в SMM-постах.",
      icon: (
        <SiRadar
          className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
        />
      ),
    },
    {
      id: 6,
      title: "Технические услуги",
      description:
        "Подключение к платежным системам, интеграции, работа с серверным хостингом. Неважно, пользуются ли они каким-либо видом услуг, мы предоставляем техническое обслуживание каждому клиенту, который выбирает нас.",
      icon: (
        <FaCogs
          className={"bg-amber-400 text-black py-1 px-1 size-8 rounded-xl"}
        />
      ),
    },
  ];

  return (
    <section
      id={"services"}
      className="bg-black text-white py-12 px-5 md:px-10 lg:px-20"
    >
      <h2
        data-aos={"zoom-in"}
        className="text-4xl text-center font-bold mt-10 mb-8"
      >
        Технологии «Cloud Solutions»
      </h2>
      <div className="gap-10">
        <Row gutter={[25, 55]}>
          {services.map((service) => (
            <Col key={service.id} xs={24} sm={24} md={8} lg={6}>
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
