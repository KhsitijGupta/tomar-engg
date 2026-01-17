import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../../assets/logo/logo0.png";

const clients = [
  { name: "ABC Industries", logo },
  { name: "Prime Builders", logo },
  { name: "Global Infrastructure", logo },
  { name: "Metro Developments", logo },
  { name: "SteelWorks India", logo },
  { name: "Urban Projects Ltd.", logo },
  { name: "EcoBuild Solutions", logo },
  { name: "Future Constructions", logo },
];

const OurClients = () => {
  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      {/* 7xl Wrapper */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Our Clients
            </h2>
            <span className="block mx-auto mt-2 h-1 w-20 bg-red-600 rounded-lg" />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by leading industrial and infrastructure partners across
            India.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          loop
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-xl shadow-sm hover:shadow-lg
                           transition p-6 flex flex-col items-center
                           justify-center text-center group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 object-contain opacity-80
                             group-hover:opacity-100 transition"
                />
                <p className="mt-3 text-sm font-medium text-gray-700">
                  {client.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
