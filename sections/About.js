import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="w-full text-txt pt-28 pb-8">
      <div className="max-w-5xl mx-auto w-full grid gap-12 sm:grid-cols-2">
        <div className="text-center sm:text-left space-y-3 md:justify-center md:flex md:flex-col px-3">
          <span className="text-first font-bold text-lg ">About us</span>
          <h2 className="text-2xl font-medium capitalize">
            We cook the best tasty food.
          </h2>
          <p className="text-lg">
            We cook the best food in the entire city, with excellent customer
            service, the best meals and at the best price, visit us.
          </p>
          <div className="py-2">
            <Link href="/">
              <a className="max-w px-6 py-3 bg-first text-white hover:bg-firstAlt">
                Explore history
              </a>
            </Link>
          </div>
        </div>
        <div className=" justify-self-center md:justify-self-start w-[280px] rounded-3xl overflow-hidden sm:-order-1 sm:w-[300px] md:w-[380px] xl:w-full">
          <Image
            src={"/img/about.jpg"}
            alt="about"
            width={100}
            height={100}
            layout="responsive"
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
