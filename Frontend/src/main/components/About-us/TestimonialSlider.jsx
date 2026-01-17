import { useEffect, useState } from "react";
import texture from "../../../assets/image.png";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Industrial Client",
    message:
      "Tomar Construction delivered our project with exceptional quality and professionalism.",
  },
  {
    name: "Amit Verma",
    role: "Commercial Project Owner",
    message:
      "Excellent planning and execution. Timelines were respected and quality was top-notch.",
  },
  {
    name: "Neha Gupta",
    role: "Infrastructure Consultant",
    message:
      "Reliable, transparent, and highly skilled team. Strongly recommended.",
  },
  {
    name: "Rohit Mehra",
    role: "Factory Owner",
    message:
      "Professional handling of our industrial project with great attention to detail.",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section
      className="relative w-full py-20 "
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255, 255, 255, 0.918),
            rgba(248, 221, 221, 0.726)
          ),
          url(${texture})
        `,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          What Our Client Says
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Trusted by clients for delivering quality construction and engineering
          excellence.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden mx-4 sm:mx-[10%]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full md:w-1/3 px-3 shrink-0">
              <div className="bg-white rounded-xl shadow-md p-6 h-full backdrop-blur-sm">
                {/* Stars */}
                <div className="text-yellow-400 mb-3">★★★★★</div>

                {/* Message */}
                <p className="text-gray-700 italic mb-5">“{t.message}”</p>

                {/* Client */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              index === i ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
