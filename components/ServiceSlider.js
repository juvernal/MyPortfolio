import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Branding is the heart and soul of your business. Let's upgrade your business",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Am bulding amazing design for your website and mobile applications.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Am coding amazing website and application nice and very responsive.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "For every tasks about copywriting contact me and let me suprise you we amazing new skills .",
  },
  {
    icon: <RxRocket />,
    title: "Montion Design",
    description:
      "Am also making good and nice motion for your logo or amazing spot for your publicity.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6
            sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
            "
            >
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg"> {item.title} </div>
                <p className="max-w-[350px] leading-normal">
                  {" "}
                  {item.description}{" "}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
