import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsTelephoneOutboundFill } from "react-icons/bs";
const iconStyle = { fontSize: "4rem", color: "#333" };
export const data = {
  menuItems: [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg
          className="h-full w-full text-inherit"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "About",
      href: "/about",
      icon: (
        <svg
          className="h-full w-full text-inherit"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ),
    },
    {
      name: "Services",
      href: "/services",
      icon: (
        <svg
          className="h-7 w-7 text-inherit"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          {" "}
          <polygon points="12 2 2 7 12 12 22 7 12 2" />{" "}
          <polyline points="2 17 12 22 22 17" />{" "}
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: (
        <svg
          className="h-full w-full text-inherit"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          {" "}
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
          <circle cx="8.5" cy="7" r="4" />{" "}
          <polyline points="17 11 19 13 23 9" />
        </svg>
      ),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: (
        <svg
          className="h-full w-full text-inherit"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          {" "}
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ],
  info: {
    name: "Rahman",
    surname: "Charyyev",
    b_day: "03.08.1996y.",
    from: "Turkmenistan, Ashgabat",
    email: "rahmancharyyev96@gmail.com",
    website: "www.example.com",
    phone: "+99365144744",
    index: "744000",
  },
  texts: {
    p_xs: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, molestias! Molestiae, quisquam!",
    p_sm: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dignissimos illo modi. Consequatur ducimus officia et optio eos, iusto,earum odio magni necessitatibus praesentium id aut architecto nostrum expedita qui? ",
    p_md: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dignissimos illo modi. Consequatur ducimus officia et optio eos, iusto,earum odio magni necessitatibus praesentium id aut architecto nostrum expedita qui?  iste, aliquid , dolorum iusto! Atque veritatis fuga cumque, nihil iusto fugit minima aliquam dignissimos natus aperiam hic similique! Ut, ea.",
    p_lg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dignissimos illo modi. Consequatur ducimus officia et optio eos, iusto,earum odio magni necessitatibus praesentium id aut architecto nostrum expedita qui?  ad nulla dolor beatae, dolorum iusto! Atque veritatis fuga cumque, nihil iusto fugit minima aliquam dignissimos natus aperiam hic similique! Ut, ea.",
  },
  links: [
    {
      _id: "link_1",
      icon: <BsInstagram style={iconStyle} />,
      gradient: {
        from: "#13E780",
        to: "#00bbd5",
      },
      link: "https://www.instagram.com/char.yev/",
      title: "my Instagram",
    },
    {
      _id: "link_2",
      icon: <FaTelegram style={iconStyle} />,
      gradient: {
        from: "#fc5dff",
        to: "#5dfdff",
      },
      link: "https://t.me/rahman_ch96",
      title: "my Telegram",
      isImportant: false,
    },
    {
      _id: "link_3",
      icon: <SiGmail style={iconStyle} />,
      gradient: {
        from: "#FEAC5E",
        to: "#4BC0C8",
      },
      link: "mailto:lionraha58@gmail.com ",
      title: "my e-mail",
      todo: "lionraha58@gmail.com",
    },
    {
      _id: "link_4",
      icon: <BsTelephoneOutboundFill style={iconStyle} />,
      gradient: {
        from: "#76acfd",
        to: "#6ed0ff",
      },
      link: "tel:+99365144744",
      title: "Call or Text me",
      todo: "+993 65 144744",
    },
    // {
    //   _id: "link_5",
    //   icon: {
    //     path: "/icons/intensives.svg",
    //     width: 150,
    //   },
    //   gradient: {
    //     from: "#c659ff",
    //     to: "#ff3f4d",
    //   },
    //   link: "https://htmllessons.ru/list-intensives",
    //   title: "Список интенсивов по подписке",
    // },
    // {
    //   _id: "link_6",
    //   icon: {
    //     path: "/icons/vs-code.svg",
    //     width: 80,
    //   },
    //   gradient: {
    //     from: "#3EA6EA",
    //     to: "#2179c1",
    //   },
    //   link: "https://www.youtube.com/watch?v=_jquc4KJ4IU",
    //   title: "Мой сетап VS Code",
    // },
    // {
    //   _id: "link_7",
    //   icon: {
    //     path: "/icons/youtube.svg",
    //     width: 84,
    //   },
    //   gradient: {
    //     from: "#e53935",
    //     to: "#e35d5b",
    //   },
    //   link: "https://www.youtube.com/c/MaxShushval?sub_confirmation=1",
    //   title: "Личный Youtube",
    // },
    // {
    //   _id: "link_8",
    //   icon: {
    //     path: "/icons/airbnb.svg",
    //     width: 75,
    //   },
    //   gradient: {
    //     from: "#FF385C",
    //     to: "#dd2e63",
    //   },
    //   link: "https://abnb.me/e/Mgl6khUuN3",
    //   title: "Получи 4000 руб. на бронирование",
    // },
    // {
    //   _id: "link_9",
    //   icon: {
    //     path: "/icons/emoji.svg",
    //     width: 90,
    //   },
    //   gradient: {
    //     from: "#f6d365",
    //     to: "#fda085",
    //   },
    //   link: "https://www.youtube.com/channel/UCdpPBwKPriPIP2eyP9a1C6g/join",
    //   title: "Уникальный значок и эмоджи",
    // },
    // {
    //   _id: "link_10",
    //   icon: {
    //     path: "/icons/boosty.svg",
    //     width: 160,
    //   },
    //   gradient: {
    //     from: "#ff8d42",
    //     to: "#ff8257",
    //   },
    //   link: "https://boosty.to/redgroup",
    //   title: "Эксклюзивный контент",
    // },
  ],
};
