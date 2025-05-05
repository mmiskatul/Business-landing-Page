import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Alex",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    rating: 5,
  },
  {
    id: 2,
    name: "John De Marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
    rating: 4,
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back...",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond...",
    rating: 4,
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier...",
    rating: 5,
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests...",
    rating: 3,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center justify-center mt-10">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-gray-600 text-sm">({rating}.0)</span>
    </div>
  );
};

function TestimonialSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="testimonial"
      className="py-20 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          What our happy clients say
        </h2>
        <p className="text-gray-600">
          Here's what our customers think about our services
        </p>
      </div>

      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col" style={{ minHeight: '400px' }}>
              <div className="flex flex-col items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-gray-100"
                />
                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 text-center italic flex-grow">
                "{testimonial.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8 gap-4">
        <button
          ref={prevRef}
          className="bg-white hover:bg-blue-200 p-3 rounded-full shadow-md transition"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <SlArrowLeft className="text-gray-700" />
        </button>
        <button
          ref={nextRef}
          className="bg-white hover:bg-blue-200 p-3 rounded-full shadow-md transition"
          onClick={() => swiperInstance?.slideNext()}
        >
          <SlArrowRight className="text-gray-700" />
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;