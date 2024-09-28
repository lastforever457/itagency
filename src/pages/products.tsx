import { observer } from "mobx-react-lite";

const Products = observer(() => {
  return (
    <div>
      <div className="relative bg-black text-amber-400 py-20 px-5 md:px-10 lg:px-20">
        <h1 className="text-4xl text-center md:text-6xl font-bold text-white mb-10">
          Сайт – это уникальная технология
        </h1>
        <p className="mb-8 leading-relaxed text-justify text-lg md:text-xl sm:max-w-2xl mx-auto pb-24">
          ТЕРМИН ВЕБ-САЙТ БУДЕТ НАМ НЕСКОЛЬКО РАЗ КАЖДЫЙ ДЕНЬ. МЫ ЗНАЕМ, ЧТО ЭТО
          СЛОВО — ИНТЕРНЕТ-АДРЕС, НО ПОНЯТИЕ ВЕБ-САЙТА, ЕГО РЕАЛЬНАЯ СУТЬ, ЗАЧЕМ
          ОН НУЖЕН, ПОЧЕМУ ОН СТАНЕТ ТАК ПОПУЛЯРНЫМ И МОЖЕТ МЫ НЕ ДУМАЕМ, ЧТО
          НАМ ДОЛЖЕН БЫТЬ САЙТ.
        </p>
        <h2 className="text-3xl text-center md:text-6xl font-bold text-white mb-10">
          ДЛЯ ЧЕГО НУЖЕН САЙТ?
        </h2>
        <p className="leading-relaxed text-justify text-lg md:text-xl sm:max-w-2xl mx-auto">
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
});

export default Products;
