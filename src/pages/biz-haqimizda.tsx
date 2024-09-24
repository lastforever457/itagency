import { Col, Row } from "antd";
import { observer } from "mobx-react-lite";

const BizHaqimizda = observer(() => {
  return (
    <>
      <div className="text-white bg-center bg-cover bg-no-repeat object-cover">
        <div className={`px-5 md:px-10 lg:px-20`}>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className={"mt-24"}>
                <h1 className={"text-[40px] font-bold"}>
                  Привет, друзья
                  <br />
                  мы хотим вместе начать курс <br /> веб-дизайна. Вам тоже
                  нравится ?
                </h1>
                <span className={"text-gray-400 text-[20px] mb-3"}>
                  Выберите нужные вам курсы из категорий онлайн или очных
                  курсов, <br /> получите индивидуальную помощь от инструкторов
                  и <br /> освойте новые навыки.
                </span>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className={`px-5 md:px-10 lg:px-20 my-10 bg-green-500`}
          style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(15px)",
          }}
        >
          <Row>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className={"pt-5 mb-5"}>
                <h1 className={"font-bold text-2xl"}>
                  Узнайте о последних курсах из информационного <br /> бюллетеня
                  <a href="#" className={"text-blue-500"}>
                    {" "}
                    Aкадемии
                  </a>
                </h1>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div className="md:flex md:justify-center md:items-center mb-7 h-full">
                <div className={"relative md:w-[500px]"}>
                  <input
                    type="text"
                    placeholder={"Введите ваш email"}
                    className={
                      "shadow-xl border-gray-300 text-black rounded-xl py-4 px-2 w-full"
                    }
                  />
                  <button
                    className={
                      "absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white py-2 px-6 rounded-full"
                    }
                  >
                    Подписаться
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={`px-5 md:px-10 lg:px-20 my-5 md:my-10 lg:my-20`}>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={12} md={12} lg={8}>
              <div className={`my-5 md:my-10 lg:my-20`}>
                <h2 className={"text-3xl mb-3"}>СЕРТИФИКАТ ЧЛЕНСТВА</h2>
                <img src="/image.svg" alt="" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8}>
              <div className={`my-5 md:my-10 lg:my-20`}>
                <h2 className={"text-3xl mb-3"}>КАТЕГОРИИ</h2>
                <div className="flex flex-col gap-[5px] text-[14px]">
                  <span className={"cursor-pointer hover:underline"}>
                    Проектирование
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Графика
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Состав
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Графика
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Пошив одежды
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    База данных
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Спорт
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    приготовление пищи
                  </span>
                  <span className={"cursor-pointer hover:underline"}>Игры</span>
                  <span className={"cursor-pointer hover:underline"}>
                    Вождение
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Искусство
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Фотография
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Операторская работа
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Программирование
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Строительство
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8}>
              <div className={`my-5 md:my-10 lg:my-20 mb-20`}>
                <h2 className={"text-3xl mb-3"}>БЫСТРЫЙ ДОСТУП</h2>
                <div className="flex flex-col gap-[5px] text-[14px]">
                  <span className={"cursor-pointer hover:underline"}>
                    Что мы предлагаем
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Карьера
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Лидерство
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Политика конфиденциальности hover:underline
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Условия использования hover:underline
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Каталог
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Степени
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Для предприятий
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Для правительства
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Для кампуса
                  </span>
                  <span className={"cursor-pointer hover:underline"}>
                    Для школ
                  </span>
                  <span className={"cursor-pointer"}>Стать партнером</span>
                  <span className={"cursor-pointer"}>Условия</span>
                  <span className={"cursor-pointer"}>Доступность</span>
                  <span className={"cursor-pointer"}>Контакты</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
});

export default BizHaqimizda;
