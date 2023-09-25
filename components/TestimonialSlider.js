// testimonial data
const testimonialData = [
  {
    image: "/t-avt-4.png",
    name: "Simo Valere",
    position: "Customer",
    message:
      "I was so impressed with Fonou's design services. They took the time to understand my business and my goals, and they developed a design that is both unique and memorable. The designing process was smooth and efficient, and I was always kept in the loop.",
  },
  {
    image: "/t-avt-5.png",
    name: "Baurice Nafack",
    position: "Customer",
    message:
      "I was very impressed with the web development services provided by Fonou. They were able to create a website that is both visually appealing and easy to use. They also worked closely with me to ensure that the website met all of my needs and requirements.",
  },
  {
    image: "/t-avt-6.png",
    name: "Nguimdo Leopold",
    position: "Video Editor",
    message:
      "I was so impressed with the motion design services provided by [your name]. They were able to create a video that is both visually stunning and engaging. The video helped me to explain my product in a clear and concise way, and it has been very effective in generating leads and sales",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[300px] "
    >
      {testimonialData.map((person, itemIndex) => {
        return (
          <SwiperSlide key={itemIndex}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest ">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* qote & message */}
              <div
                className=" flex-1 flex flex-col justify-center before:w-[1px] 
              xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 "
              >
                {/* qote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {" "}
                  {person.message}{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
