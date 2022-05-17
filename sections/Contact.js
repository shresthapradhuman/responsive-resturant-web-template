import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact-us" className="pt-28 pb-10 w-full text-txt">
      <div className="grid gap-12 sm:grid-cols-2 md:max-w-5xl mx-auto">
        <div className="text-center sm:text-left space-y-2">
          <span className="text-lg sm:px-4 text-first  font-bold">
            Let's talk
          </span>
          <h2 className="text-3xl sm:px-4 font-medium">Contact us</h2>
          <p className="px-6 sm:px-4 text-lg">
            If you want to reserve a table in our restaurant, contact us and we
            will attend you quickly, with our 24/7 chat service.
          </p>
        </div>
        <div className="text-center sm:flex sm:justify-center md:justify-end sm:items-center">
          <button className=" bg-first w-max px-4 py-3 text-white text-xl">
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
