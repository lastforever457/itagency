import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { Image } from "antd";

const SwiperComponent = observer(() => {
  SwiperCore.use([Autoplay]);
  const imageLinks: string[] = useMemo(
    () => [
      "/images/picture-1.jpg",
      "/images/picture-2.jpg",
      "/images/picture-3.png",
      "/images/picture-4.webp",
      "/images/picture-5.jpg",
      "/images/picture-6.jpg",
      "/images/picture-7.jpg",
      "/images/picture-8.svg",
      "/images/picture-9.png",
      "/images/picture-10.png",
      "/images/picture-11.jpg",
      "/images/picture-12.png",
      "/images/picture-13.png",
      "/images/picture-14.jpg",
      "/images/picture-15.png",
      "/images/picture-16.PNG",
    ],
    [],
  );

  return (
    <div className={"w-[100%]"}>
      <Swiper
        className={"bg-black"}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {imageLinks.map((link, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100%] h-[200px] object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
              <Image
                className={
                  "w-full h-full rounded-2xl bg-center bg-cover object-cover"
                }
                src={link}
                alt="Image 1"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default SwiperComponent;
