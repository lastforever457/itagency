import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { Col, Row } from "antd";

const Home = observer(() => {
  return (
    <div id={"main"}>
      <div>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="absolute w-[100%]  bg-cover bg-center object-cover min-h-[100vh] -z-10"
        >
          <source src="/main-video.mp4" type="video/mp4" />
        </video>
        <Link
          target={"_blank"}
          to={
            "https://www.google.com/maps/place/41%C2%B020'55.5%22N+69%C2%B020'14.4%22E/@41.348747,69.337344,16z/data=!4m4!3m3!8m2!3d41.348747!4d69.337344?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
          }
        >
          <div
            data-aos="fade-right"
            className={`px-5 md:px-10 lg:px-20 text-white w-[100%] min-h-[100vh] flex flex-col justify-center gap-3`}
          >
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold">
              Cloud <br /> Solutions <br /> IT Company <br />
            </h1>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
              КОМПАНИЯ СЕГОДНЯШНЕГО И БУДУЩЕГО!
            </p>
            <Link to={"tel:+998889006003"}>
              <button
                className={
                  "bg-green-600 flex items-center justify-center gap-3 w-[330px] text-white px-5 py-3 rounded-md"
                }
              >
                <AiFillPhone />
                позвонить
              </button>
            </Link>
          </div>
        </Link>
      </div>
      <div id={"trust"} className="py-5 bg-[#000806] pb-32">
        <div className="px-5 md:px-10 lg:px-20">
          <Row gutter={[16, 16]}>
            <Col data-aos="zoom-on" xs={24} sm={24} md={12} lg={12} xl={12}>
              <img
                src="/img.png"
                alt=""
                className="rounded-xl h-[400px] object-cover bg-center bg-cover"
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div data-aos="fade-left">
                <h1 className="text-white text-7xl pb-10">IT Company</h1>
                <span className={"text-white text-[26px]"}>
                  «Cloud-Solutions» LLC - Индивидуальные программные решения для
                  Вашего бизнеса Надежный партнер в цепочке поставок ИТ-услуг
                </span>
                <br />
                <br />
                <span className={"text-white text-[20px]"}>
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
      {/*<SwiperComponent />*/}
      {/*<ServiceComponent />*/}
      {/*<Portfolio />*/}
      {/*<Contact />*/}
    </div>
  );
});

export default Home;
