import {Link} from "react-router-dom";
import {NavSideBarLinkProp} from "./props";
import {NavSideBarLinkItemContainer} from "./styles";

export const NavSideBarLink = ({href, isVisible, title, icon}: NavSideBarLinkProp) =>
  (isVisible ?
    (<NavSideBarLinkItemContainer>
      {icon}
      <Link to={href}>{title}</Link>
    </NavSideBarLinkItemContainer>) : (<></>)
  )

export const createLink = (route: NavSideBarLinkProp) => (
  <NavSideBarLink key={route.href} {...route} />
);