import Image from "next/image";
import { menu } from "../data/setting";

const Menu = () => {
  let data = menu.filter((items) => items.feature == true);
  return (
    <section id="special-menu" className="pt-28 pb-10 text-txt">
      <div className="max-w-5xl md:max-w-4xl w-full mx-auto grid gap-12">
        <div className="text-center">
          <span className="text-lg text-first font-bold block mb-2">
            Special
          </span>
          <h2 className="text-2xl font-medium">Menu of the Week</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 md:px-0">
          {data.map((item, i) => {
            return (
              <div key={i} className="shadow-2xl p-8 grid gap-y-6">
                <div className="w-24 md:w-40 justify-self-center">
                  <Image
                    src={item.img}
                    alt={item.title.replace(" ", "")}
                    width={100}
                    height={100}
                    priority
                    layout="responsive"
                  />
                </div>
                <div className="mt-2 md:text-center">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm">{item.desc}</p>
                  <span className="text-sm font-medium">
                    <small>$</small> {item.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
