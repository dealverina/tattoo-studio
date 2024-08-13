import AnchorLink from "react-anchor-link-smooth-scroll";
import { navData } from "../data";

export const Nav = () => {
  const { items } = navData;

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {items.map((item, index) => (
          <li key={index}>
            <AnchorLink
              className="link hover:border-b-2 hover:border-dark transition duration-300"
              href={item.href}
            >
              {item.name}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
