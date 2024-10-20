import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Home = observer(() => {
  const { t } = useTranslation();

  return (
    <div id={"#"}>
      <div>
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className=" w-[100%] fixed bg-cover bg-center object-cover min-h-[100vh] -z-10"
        >
          <source src="/videos/main-video.mp4" type="video/mp4" />
        </video>
        <div
          data-aos="fade-right"
          className={`px-5 md:px-10 lg:px-20 text-white w-[100%] min-h-[100vh] flex flex-col justify-center gap-3`}
        >
          <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold">
            Cloud <br /> Solutions <br /> IT Company <br />
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
            {t("slogan")}
          </p>
          <Link to={"tel:+998889006003"}>
            <button
              className={
                "bg-green-600 flex items-center justify-center gap-3 w-[330px] text-white px-5 py-3 rounded-md"
              }
            >
              <AiFillPhone />
              {t("call")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Home;
