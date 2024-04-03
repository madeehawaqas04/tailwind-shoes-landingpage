import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 sm:gap-6 gap-14">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
      </div>
    </section>
  );
};

export default Services;
