import { testimonials } from "../data";
import GetStarted from "./GetStarted";


const TestimonialsCard = ({ id, image, name, content }) => (
  <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
    <img src={image} alt="" className="w-16 -mt-14" />
    <h5 className=" text-lg font-bold">{name}</h5>
    <p className="text-sm text-darkGrayishBlue  ">{content}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="max-w-9xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">What they’ve said</h2>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6 gap-10">
          {testimonials.map((tes) => (
            <TestimonialsCard key={tes.id} {...tes} />
          ))}
        </div>
        <div className="my-16">
          <GetStarted styles="text-white"/>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
