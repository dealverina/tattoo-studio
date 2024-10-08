import Logo from "../src/assets/img/header/logo.svg";
import GalleryImg1 from "../src/assets/img/gallery/1.png";
import GalleryImg2 from "../src/assets/img/gallery/2.png";
import GalleryImg3 from "../src/assets/img/gallery/3.png";
import GalleryImg4 from "../src/assets/img/gallery/4.png";
import GalleryImg5 from "../src/assets/img/gallery/5.png";
import GalleryImg6 from "../src/assets/img/gallery/6.png";
import GalleryImg7 from "../src/assets/img/gallery/7.png";
import GalleryImg8 from "../src/assets/img/gallery/8.png";
import QuoteImg from "../src/assets/img/testimonial/quote.svg";

import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoYoutube,
} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#gallery", name: "Gallery" },
    { href: "#skills", name: "Services" },
    { href: "#interview", name: "Interview" },
    { href: "#contact", name: "Contact" },
  ],
};

export const socialData = [
  { href: "https://facebook.com", icon: <GrFacebookOption /> },
  { href: "https://instagram.com", icon: <IoLogoInstagram /> },
  { href: "https://x.com", icon: <FaXTwitter /> },
  { href: "https://youtube.com", icon: <IoLogoYoutube /> },
  { href: "https://pinterest.com", icon: <IoLogoPinterest /> },
];

export const heroData = {
  title: "I'm Void Sir.",
  subtitle:
    "Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.",
  btnText: "read more",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "My Story:",
  subtitle1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex iste quisquam officiis minima incidunt explicabo modi voluptates, reiciendis inventore quasi eos, in ea, illum blanditiis aliquam nihil odit saepe?",
  subtitle2:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, obcaecati adipisci voluptatibus consequuntur a dolorem sapiente ad quo et eligendi dignissimos reiciendis rerum necessitatibus, quae amet est provident aliquam aperiam.",
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Check my gallery",
  btnText: "View all",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 464,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have”",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique. They will properly consult with you",
    name: "Jack Geoffrey",
    occupation: "Tattoo Artist",
  },
  {
    quoteImg: QuoteImg,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente inventore harum cum earum nesciunt dignissimos ullam recusandae, accusamus asperiores optio ducimus nemo! Suscipit in nostrum maiores animi natus culpa.",
    name: "Douglas Hane",
    occupation: "Tattoo Artist",
  },
];

export const contactData = {
  title: "Get in touch with me:",
  info: [
    {
      title: "LA office",
      subtitle:
        "In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "784 Norman Street, Los Angeles",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 93 30493943",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
    {
      title: "NYC office",
      subtitle:
        "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "1630 Elm Drive, New York City",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "+49 34 36573355",
      },
      email: {
        icon: <FaEnvelope />,
        address: "contact@yourcompany.com",
      },
      link: "Get location",
    },
  ],
  form: {
    name: "Write your name here",
    email: "Write your email address",
    message: "Write your messages here",
    btnText: "Send it",
  },
};

export const footerData = {
  about: {
    title: "About void tattoo",
    subtitle:
      "Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "1630 Elm Drive, New York City",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "+49 34 36573355",
    },
    email: {
      icon: <FaEnvelope />,
      address: "contact@yourcompany.com",
    },
  },
  links: {
    title: "Useful links",
    items: [
      { href: "#about", name: "About me" },
      { href: "#gallery", name: "My gallery" },
      { href: "#skills", name: "My services" },
      { href: "#contact", name: "Contact me" },
    ],
  },
  program: {
    title: "Working Time",
    items: [
      { name: "Mon - Tue / Appointment" },
      { name: "Wed - Fri / 10:00 - 9:00pm" },
      { name: "Sat / 10:00 - 6:00pm" },
      { name: "Sun / no work on this day" },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle:
      "Elit duis porttitor massa tellus nun in velit arcu posuere integer.",
    form: {
      placeholder: "Your email address",
      icon: <FiSend />,
    },
  },
};
