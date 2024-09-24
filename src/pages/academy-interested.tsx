import { Col, Row } from "antd";

function AcademyInterested() {
  const texts = [
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
  ];

  return (
    <div>
      <div
        className={"pt-40 bg-cover bg-center bg-no-repeat object-cover"}
        style={{ backgroundImage: 'url("/Group 484.svg")' }}
      >
        <h1 className={"text-[60px] pb-32 text-center text-white font-bold"}>
          Cloud Solution It <br /> Academy
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
                <div className="flex items-center space-x-4">
                  <h1 className="text-4xl font-bold text-amber-600">
                    {text.id}
                  </h1>
                  <span className="font-bold text-left text-amber-600">
                    {text.title}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Web Sayt Section */}
      <div className="relative bg-black text-amber-400 py-20 px-6 md:px-20">
        <h1 className="text-4xl text-center md:text-6xl font-bold text-white mb-10">
          Сайт – это уникальная технология
        </h1>
        <p className="mb-8 leading-relaxed text-center text-lg md:text-xl max-w-2xl mx-auto pb-24">
          ТЕРМИН ВЕБ-САЙТ БУДЕТ НАМ НЕСКОЛЬКО РАЗ КАЖДЫЙ ДЕНЬ. МЫ ЗНАЕМ, ЧТО ЭТО
          СЛОВО — ИНТЕРНЕТ-АДРЕС, НО ПОНЯТИЕ ВЕБ-САЙТА, ​​ЕГО РЕАЛЬНАЯ СУТЬ,
          ЗАЧЕМ ОН НУЖЕН, ПОЧЕМУ ОН СТАНЕТ ТАК ПОПУЛЯРНЫМ И МОЖЕТ МЫ НЕ ДУМАЕМ,
          ЧТО НАМ ДОЛЖЕН БЫТЬ САЙТ.
        </p>
        <h2 className="text-3xl md:text-5xl text-center text-white font-bold mb-4">
          ДЛЯ ЧЕГО НУЖЕН САЙТ?
        </h2>
        <p className="leading-relaxed text-center text-lg md:text-xl max-w-2xl mx-auto">
          В настоящее время собственные сайты имеют частные лица, компании и
          организации, оказывающие услуги клиентам и предлагающие свою
          продукцию. Итак, зачем вам сайт для них? Предоставляет подробную
          информацию о компании или человеке! Привлекает клиентов! Оказывает
          услуги клиентам онлайн! Станьте инструментом обмена информацией! Он
          информирует интернет-пользователей об имидже компании!
        </p>
      </div>
    </div>
  );
}

export default AcademyInterested;
