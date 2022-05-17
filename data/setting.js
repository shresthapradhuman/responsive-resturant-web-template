import { IoFastFood, IoRestaurantOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
export const header = {
  logo: "Tasty food",
  menu: [
    {
      title: "home",
      path: "/#home",
    },
    {
      title: "about",
      path: "/#about",
    },
    {
      title: "service",
      path: "/#service",
    },
    {
      title: "menu",
      path: "/menu",
    },
    {
      title: "contact-us",
      path: "/#contact-us"
    }
  ],
};

export const services = [
  {
    icon: <IoRestaurantOutline />,
    title: "Quality Dish",
    desc: "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
  },
  {
    icon: <IoFastFood />,
    title: "Dish Variety",
    desc: "We not only serve quality of food, also we have many varieties of dish from all over the world.",
  },
  {
    icon: <FaShippingFast />,
    title: "Food Delivery",
    desc: "We provide food delivery services too. We have third party service Uber Eats, Food Panda, Daemai for our delivery service.",
  },
];

export const menu = [
  {
    img: "/img/plate1.png",
    title: "Barbecure",
    desc: "Delicious Dish",
    price: "20",
    feature: true,
  },
  {
    img: "/img/plate2.png",
    title: "Salad with fish",
    desc: "Delicious Dish",
    price: "20",
    feature: true,
  },
  {
    img: "/img/plate3.png",
    title: "Barbecure",
    desc: "Delicious Dish",
    price: "20",
    feature: true,
  },
];

export const service = [
  "Delivery",
  "Pricing",
  "Fast food",
  "Reserve your spot",
];
export const information = [
  "Event",
  "Contact us",
  "privacy policy",
  "Tern if services",
];
export const address = {
  postal: "xxx-xxxx",
  country: "japan",
  state: "tokyo",
  city: "akihabara",
  street: "maebarhigashi 3",
};
export const contact = {
  phone: "xxx-xxxx-xxxx",
  email: "email@support.com",
};
