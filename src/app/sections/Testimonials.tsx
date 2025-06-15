import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 md:py-20 px-4 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-alexBrush text-6xl md:text-[100px] text-center text-rose-800 mb-8 md:mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              quote:
                "Benedicta transformed my wedding day look beyond expectations! Her attention to detail and understanding of my skin tone created a flawless, long-lasting makeup that looked perfect in every photo. She's truly an artist who listens to her clients.",
              name: "Ama Serwaa",
              role: "Bride",
            },
            {
              quote:
                "As a professional model, I've worked with many makeup artists, but Benedicta stands out. Her editorial looks are always innovative yet wearable. She understands lighting and photography needs better than anyone I've worked with in Accra.",
              name: "Nana Yaa",
              role: "Model",
            },
            {
              quote:
                "I was hesitant about permanent lashes, but Benedicta's expertise put me at ease. The results are natural yet transformative - I wake up looking polished. Her studio is immaculate, and her technique is virtually painless. Worth every cedi!",
              name: "Esi Mensah",
              role: "Regular Client",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md md:shadow-none"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="absolute -top-6 left-0 font-playfairDisplay text-8xl md:text-[120px] text-rose-100 opacity-80 leading-none">
                <BsQuote />
              </div>
              <div className="pt-10">
                <p className="font-cormorant text-sm md:text-lg text-gray-700 italic mb-4 md:mb-6">
                  {testimonial.quote}
                </p>
                <div className="h-px w-full bg-rose-200 my-3 md:my-4"></div>
                <p className="font-montserrat text-gray-900 font-medium text-sm md:text-base">
                  {testimonial.name},{" "}
                  <span className="text-rose-600">{testimonial.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
