import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: {
    opacity: 0,
    y: "-100px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      stiffness: 1000,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      whileInView="visible"
      id="home"
      className=" pt-36"
    >
      <div className="grid gap-12 max-w-5xl mx-auto sm:grid-cols-2">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          className="px-4 space-y-3 sm:flex sm:justify-center sm:flex-col"
        >
          <h1 className=" text-4xl text-first">Tasty food</h1>
          <h2 className="text-2xl">Try the best food of the week</h2>
          <div className="py-2">
            <Link href={"/#special-menu"}>
              <a className="w-max px-6 py-3 bg-first hover:bg-firstAlt text-white">
                Special Menu
              </a>
            </Link>
          </div>
        </motion.div>
        <div className="w-[280px] md:w-[380px] xl:w-full justify-self-center">
          <Image
            src={"/img/home.png"}
            alt="hero"
            width={100}
            height={100}
            layout="responsive"
            priority
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
