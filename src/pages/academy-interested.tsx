import { Col, Row } from "antd";
import { useMemo } from "react";

function AcademyInterested() {
  const texts = useMemo(
    () => [
      {
        id: 1,
        title: "Определение целей и задач",
      },
      {
        id: 2,
        title: "Структура и развитие",
      },
      {
        id: 3,
        title: "Разработка стратегии и тактики",
      },
      {
        id: 4,
        title: "Создание контента и продвижение",
      },
      {
        id: 5,
        title: "Анализ результатов и корректировка",
      },
      {
        id: 6,
        title: "Обучение и развитие персонала",
      },
      {
        id: 7,
        title: "Оценка эффективности и достижения цели",
      },
      {
        id: 8,
        title: "Создать дизайн и реализовать функционал",
      },
      {
        id: 9,
        title: "Тестирование проекта",
      },
      {
        id: 10,
        title: "Хостинг, регистрация и обслуживание доменов",
      },
    ],
    [],
  );

  return (
    <div>
      <div
        className={"pt-40 bg-cover bg-center bg-no-repeat object-cover"}
        style={{
          backgroundImage: 'url("/Group 484.svg")',
        }}
      >
        <h1
          className={
            "px-5 md:px-10 lg:px-20 text-[40px] md:text-[60px] pb-32 text-center text-white font-bold"
          }
        >
          Cloud Solutions IT Academy
        </h1>
      </div>
      <div className="pt-24 pb-32 bg-black px-5 md:px-10 lg:px-20">
        <h1 className="text-center text-5xl text-white font-bold">
          Как мы работаем?
        </h1>
        <div className="gap-5 mt-10 mx-auto">
          <Row gutter={[16, 30]}>
            {texts.map((text) => (
              <Col key={text.id} xs={24} sm={24} md={8} lg={6}>
                <div className="flex items-center space-x-4 cursor-pointer">
                  <h1 className="text-4xl font-bold text-amber-600">
                    {text.id}
                  </h1>
                  <span className="font-bold text-left text-amber-600 hover:underline">
                    {text.title}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AcademyInterested;
