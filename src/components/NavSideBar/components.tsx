import { Link } from "react-router-dom";

export type NavSideBarLinkProp = {
  isVisible: boolean;
  href: string;
  title: string;
};

export const NavSideBarLink = ({
  href,
  isVisible,
  title,
}: NavSideBarLinkProp) => {
  return isVisible ? (
    <li>
      <Link to={href}>{title}</Link>
    </li>
  ) : (
    <></>
  );
};
