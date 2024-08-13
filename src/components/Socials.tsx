import { socialData } from "../data";

export const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[30px]">
      {socialData.map((item, index) => (
        <li key={index}>
          <a href={item.href} target="_blank">{item.icon}</a>
        </li>
      ))}
    </ul>
  );
};
