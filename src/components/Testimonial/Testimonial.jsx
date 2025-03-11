import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Michael Reynolds, Senior VP, IBM",
    image: "https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/michael-reynolds-edbb5fb8.jpg",
    text: "The team at Collier Consulting & Staffing has been instrumental in streamlining our operations and optimizing our workforce. Their deep industry knowledge and personalized approach set them apart.",
  },
  {
    name: "Sarah Collins, CFO, JPMorgan Chase & Co",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHXryUB3C0zuw/profile-displayphoto-shrink_200_200/B56ZS5nM5UHQAg-/0/1738280849490?e=2147483647&v=beta&t=O-MtpeWdI_Du736_Y03BLN-w57kop53yV4mgR_vlH40",
    text: "Collier Consulting provided us with the right people and the right strategies at the right time. Their expertise in finance and IT helped us navigate a critical phase of growth.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="">
      <div className="container mx-auto text-center">
        <p className="font-semibold text-sm text-gray-400 uppercase">Powering Executive Decisions</p>
        <h1 className="text-2xl md:text-4xl mt-1 mb-5 text-white">Executive Insights</h1>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 5000 }}
          className="w-full md:w-2/3 mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 rounded-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-300"
                />
                <p className="text-white text-lg italic mx-5">{testimonial.text}</p>
                <h4 className="text-xl font-bold text-white mt-3 mx-5">
                  {testimonial.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
