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
      "/picture-1.jpg",
      "/picture-2.jpg",
      "/picture-3.png",
      "/picture-4.webp",
      "/picture-5.jpg",
      "/picture-6.jpg",
      "/picture-7.jpg",
      "/picture-8.svg",
      "/picture-9.png",
      "/picture-10.png",
      "/picture-11.jpg",
      "/picture-12.png",
      "/picture-13.png",
      "/picture-14.jpg",
      "/picture-15.png",
      "/picture-16.PNG",
    ],
    [],
  );

  return (
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
  );
});

export default SwiperComponent;
