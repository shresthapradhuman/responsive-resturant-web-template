import { services } from "../data/setting";

const Service = () => {
  return (
    <section id="service" className="pt-28 pb-8 text-txt">
      <div className="grid gap-12 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-lg text-first font-bold">Offering</span>
          <h2 className="text-2xl font-medium capitalize">
            Our Amazing Services
          </h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, key) => {
            return (
              <div key={key} className="text-center space-y-3 px-4">
                <div className="text-7xl text-first flex justify-center items-center p-2">{item.icon}</div>
                <h2 className="text-xl font-medium">{item.title}</h2>
                <p className="px-2">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
